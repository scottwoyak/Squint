import { Vec3, Vec2 } from "../../Util3D/Vec";
import { OverlayCanvas } from "../../GUI/OverlayCanvas";
import { PointerEventHandler } from "../../GUI/PointerEventHandler";
import { Renderer } from "./Renderer";
import { Camera, FixedSizeProvider } from "./Camera";
import { Mat4 } from "../../Util3D/Mat";
import { toRad, clamp, isMobile, toDeg } from "../../Util/Globals";
import { glSpace } from "../../gl/glSpace";
import { TriangleObj } from "../../Util3D/TriangleObj";

export type PerspectiveChangeFunction = () => void;

export interface IPerspectiveProvider {
   readonly fov: number;
   eye: Vec3;
   readonly lookAt: Vec3;
}

export class PerspectiveCtrl {
   private gl: WebGLRenderingContext;
   private overlay: OverlayCanvas;
   private handler: PointerEventHandler;
   private renderer: Renderer;
   private provider: IPerspectiveProvider;

   public onChange: PerspectiveChangeFunction;

   public constructor(
      parent: HTMLElement,
      provider: IPerspectiveProvider
   ) {

      this.provider = provider;

      let canvas = document.createElement('canvas');
      canvas.id = 'PerspectiveCanvas';
      parent.appendChild(canvas);

      // don't try to make the canvas transparent to the underlying html. This
      // seems to limit the alpha values we can use in our scene.
      let context = canvas.getContext('webgl', { alpha: false }) as WebGLRenderingContext;

      if (!context) {
         // TODO display a message about not being able to create a WebGL context
         console.log("Unable to get WebGL context");
      }
      this.gl = context;
      this.renderer = new Renderer(context);
      this.renderer.showMiniView = false;
      this.renderer.showBall = false;
      this.renderer.options.camera = new Camera({
         sizeProvider: new FixedSizeProvider(2, 2)
      });
      this.renderer.options.camera.useOrthographic = true;
      this.renderer.showFloor = false;

      this.overlay = new OverlayCanvas(parent, 'PerspectiveOverlayCanvas');

      this.handler = new PointerEventHandler(canvas);
      this.handler.onDown = (pos: Vec2) => this.onDown(pos);
      this.handler.onDrag = (pos: Vec2, delta: Vec2) => this.onDrag(pos, delta);
   }

   public dispose(): void {
      this.renderer.dispose();
   }

   private setEyePos(pos: Vec2) {

      // convert to model space
      this.provider.eye = this.fromScreen(pos);

      if (this.onChange) {
         this.onChange();
      }
   }

   private onDown(pos: Vec2) {
      this.setEyePos(pos);
   }

   private onDrag(pos: Vec2, delta: Vec2) {
      this.setEyePos(pos);
   }

   public setSize(width: number, height: number) {
      let gl = this.gl;
      gl.canvas.width = width;
      gl.canvas.height = height;
   }

   public render(modelMat: Mat4) {
      // set the model matrix of the object to that of the primary
      // obj with an additional 90 deg rotation
      this.renderer.obj.model = modelMat.clone().rotY(toRad(90));

      // shift the view so that the object is on the far right. Far enough that there is
      // a square space on the end that contains the origin (center of object we're viewing)
      let viewSpace = this.renderer.options.camera.getViewSpace(this.gl);
      this.renderer.options.camera.lookAt = new Vec3([-viewSpace.width / 2 + viewSpace.height / 2, 0, 0]);

      this.renderer.render();

      this.drawEye();
   }

   private fromScreen(pt: Vec2): Vec3 {
      let canvas = this.gl.canvas;
      let ar = canvas.width / canvas.height;

      // the space we're viewing is a 2x2 box on the right
      let width = 2 * ar; // space.width * (2.0 / space.height);
      let height = 2.0;
      let space = new glSpace(new Vec3([-width / 2, -height / 2, -100]), new Vec3([width / 2, height / 2, 100]));

      let boxSize = space.height;
      let z = clamp((1 - pt.x / canvas.width) * space.width - boxSize / 2, boxSize / 2, 100);
      let y = clamp(space.bottom + (1 - pt.y / canvas.height) * space.height, -1, 1);

      return new Vec3([this.provider.eye.x, y, z]);
   }

   private toScreen(pt: Vec3): Vec2 {
      let canvas = this.gl.canvas;
      let ar = canvas.width / canvas.height;

      // the space we're viewing is a 2x2 box on the right
      let width = 2 * ar; // space.width * (2.0 / space.height);
      let height = 2.0;
      let space = new glSpace(new Vec3([-width / 2, -height / 2, -100]), new Vec3([width / 2, height / 2, 100]));

      let boxSize = space.height;
      let x = (1 - (pt.z + boxSize / 2) / space.width) * canvas.width;
      let y = (1 - (pt.y - space.bottom) / space.height) * canvas.height;
      return new Vec2([x, y]);
   }

   private drawLine(ctx: CanvasRenderingContext2D, pt1: Vec3, pt2: Vec3) {
      let p1 = this.toScreen(pt1);
      let p2 = this.toScreen(pt2);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
   }

   private drawEye() {
      let gl = this.gl;
      let ctx = this.overlay.context;
      ctx.canvas.width = gl.canvas.width;
      ctx.canvas.height = gl.canvas.height;
      ctx.lineWidth = 2;

      if (isMobile) {
         ctx.lineWidth = 2 * ctx.lineWidth;
      }

      ctx.clearRect(0, 0, this.gl.canvas.width, this.gl.canvas.height);

      let space = this.renderer.options.camera.getViewSpace(this.gl);
      // draw the front 'view' line
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      this.drawLine(ctx, new Vec3([0, space.top, space.height / 2]), new Vec3([0, space.bottom, space.height / 2]));

      // draw line from the eye to the look at center
      this.drawLine(ctx, this.provider.eye, this.provider.lookAt);

      let p1 = this.toScreen(this.provider.eye);
      let p2 = this.toScreen(this.provider.lookAt);

      let angle = toDeg(Math.atan2(p2.y - p1.y, p2.x - p1.x));

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      p2.x = p1.x + ctx.canvas.width * Math.cos(toRad(angle + this.provider.fov / 2));
      p2.y = p1.y + ctx.canvas.width * Math.sin(toRad(angle + this.provider.fov / 2));
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      p2.x = p1.x + ctx.canvas.width * Math.cos(toRad(angle - this.provider.fov / 2));
      p2.y = p1.y + ctx.canvas.width * Math.sin(toRad(angle - this.provider.fov / 2));
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();

      let center = this.toScreen(this.provider.eye);
      ctx.strokeStyle = 'white';
      ctx.fillStyle = 'rgba(255,255,255,0.6)';

      // draw the actual eye
      let openAngle = 70;
      let radius = 0.12 * ctx.canvas.height;
      let startAngle = angle + openAngle / 2;
      let endAngle = startAngle + (360 - openAngle);
      ctx.beginPath();
      ctx.moveTo(center.x, center.y);
      ctx.arc(center.x, center.y, radius, toRad(startAngle), toRad(endAngle));
      ctx.closePath();
      ctx.fill()
      ctx.stroke();

      ctx.strokeStyle = 'transparent';
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.beginPath();
      ctx.moveTo(center.x, center.y);
      ctx.arc(center.x, center.y, radius, toRad(startAngle), toRad(endAngle), true);
      ctx.closePath();
      ctx.fill()
      ctx.stroke();

      // draw the look at point (center of object)
      center = this.toScreen(this.provider.lookAt);
      radius = 2;

      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(center.x, center.y, radius, 0, toRad(360));
      ctx.fill();
   }

   public setModel(tObj: TriangleObj) {
      this.renderer.setModel(tObj);
   }
}