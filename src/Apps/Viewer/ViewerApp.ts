import { Contour, Renderer, LightType, Reset, RenderMode } from './Renderer';
import { glColor3 } from '../../gl/glColor';
import { IApp } from '../../IApp';
import { OverlayCanvas, TextLocation } from '../../GUI/OverlayCanvas';
import { PointerEventHandler } from '../../GUI/PointerEventHandler';
import { PerspectivePanel } from './PerspectivePanel';
import { ValuePlanesPanel } from './ValuePlanesPanel';
import { hsvColor } from '../../Util/hsvColor';
import { FPS } from '../../Util/FPS';
import { ModelLoader } from './ModelLoader';
import { htmlColor } from '../../Util/htmlColor';
import { Vec2, Vec3, Vec4 } from '../../Util3D/Vec';
import { toRad, isMobile } from '../../Util/Globals';
import { NormalType } from '../../Util3D/TriangleObj';
import { Panel } from '../../GUI/Panel';
import { ValueRange } from './ValueRange';
import { Menubar, SubMenu } from '../../GUI/Menu';
import { createModelsMenu } from './ModelsMenu';
import { Radiobutton } from '../../GUI/Radiobutton';
import { Slider } from '../../GUI/Slider';
import { Checkbox } from '../../GUI/Checkbox';
import { TriangleObjBuilder } from '../../Util3D/TriangleObjBuilder';
import saveAs from 'file-saver';

enum PointerMode {
   View,
   Light,
}

const COLOR_CONTOURS = [
   new Contour(new glColor3([1.00, 0.20, 0.20]), 10), // red
   new Contour(new glColor3([1.00, 0.55, 0.25]), 20), // orange
   new Contour(new glColor3([1.00, 0.81, 0.25]), 30), // light orange
   new Contour(new glColor3([1.00, 1.00, 0.00]), 40), // yellow
   new Contour(new glColor3([0.30, 1.00, 0.10]), 50), // green
   new Contour(new glColor3([0.25, 0.90, 0.90]), 60), // cyan
   new Contour(new glColor3([0.50, 0.50, 1.00]), 70), // light blue
   new Contour(new glColor3([0.20, 0.20, 1.00]), 80), // blue
   new Contour(new glColor3([0.30, 0.11, 0.40]), 90), // purple
]


export class ViewerApp implements IApp {
   private gl: WebGLRenderingContext | WebGL2RenderingContext = null;
   private renderer: Renderer;
   private pointerMode: PointerMode = PointerMode.View;
   private overlay: OverlayCanvas;
   private handler: PointerEventHandler;
   private rotateLightWithObject = false;
   private perspectivePanel: PerspectivePanel;
   private valuePlanesPanel: ValuePlanesPanel;
   private baseBackgroundColor: hsvColor;

   private dirty = true;
   private animate = false;
   private animationFrame: number;
   private fps = new FPS();

   private initialFile: string;

   private loader = new ModelLoader();

   public constructor(file: string) {
      if (!file) {
         const num = Math.round(0.5 + 16 * Math.random());
         file = 'Pose_0' + num + '.blob';
      }

      this.initialFile = file;
   }

   public create(div: HTMLDivElement): void {

      div.id = 'ViewerApp';

      const viewContainer = document.createElement('div');
      viewContainer.id = 'ViewContainer';
      viewContainer.className = 'Container';
      div.appendChild(viewContainer);

      this.createViewElements(viewContainer);
      this.createPerspectivePanel(div);
      this.createValuePlanesPanel(div);
      this.updateSize();

      this.loadModel(this.initialFile);
   }

   private createViewElements(parent: HTMLElement) {

      const canvas = document.createElement('canvas');
      canvas.id = 'MainCanvas';
      parent.appendChild(canvas);

      const style = getComputedStyle(canvas);
      this.baseBackgroundColor = hsvColor.fromHtmlColor(htmlColor.fromCss(style.backgroundColor));

      this.overlay = new OverlayCanvas(parent);

      // don't try to make the canvas transparent to the underlying html. This
      // seems to limit the alpha values we can use in our scene.
      const context = canvas.getContext('webgl', { alpha: false });

      if (!context) {
         // TODO display a message about not being able to create a WebGL context
         console.log('Unable to get WebGL context');
      }
      this.gl = context;

      this.renderer = new Renderer(this.gl);
      this.renderer.showMiniView = false;

      this.handler = new PointerEventHandler(canvas);
      this.handler.onDrag = (pos: Vec2, delta: Vec2) => this.onDrag(pos, delta);
      this.handler.onDown = () => {
         this.animate = false;
         this.overlay.clear();
      }
      this.handler.onClick = (pos: Vec2) => this.onClick(pos);
      this.handler.onDblClick = () => {
         this.animate = true;
         this.fps = new FPS();
         return false;
      }
      this.handler.onScale = (scale: number, change: number) => this.onScale(scale, change);
      this.handler.onRotate = (angle: number, delta: number) => this.onRotate(angle, delta);
      this.handler.onTranslate = (delta: Vec2) => this.onTranslate(delta);

      document.onkeydown = (event: KeyboardEvent) => {
         let angle = 90;
         if (event.ctrlKey) {
            angle = 1;
         }
         switch (event.keyCode) {
            case 37: // left
               this.rotateObjects(toRad(angle), 0);
               this.dirty = true;
               break;
            case 38: // up
               this.rotateObjects(0, toRad(angle));
               this.dirty = true;
               break;
            case 39: // right
               this.rotateObjects(toRad(-angle), 0);
               this.dirty = true;
               break;
            case 40: // down
               this.rotateObjects(0, toRad(-angle));
               this.dirty = true;
               break;
         }
      }

      document.onkeypress = (event: KeyboardEvent) => {
         switch (event.key) {

            case 'a':
               this.renderer.obj.applyXForm();
               this.dirty = true;
               break;

            case 'd':
               this.renderer.showShadowMap = !this.renderer.showShadowMap;
               this.dirty = true;
               break;

            case 'g':
               this.renderer.showGrid = !this.renderer.showGrid;
               this.dirty = true;
               break;

            case 'h':
               this.renderer.options.showHighlights = !this.renderer.options.showHighlights;
               this.dirty = true;
               break;

            case 'i':
               alert(
                  this.renderer.tObj.name + '\n' +
                  'Num Triangles: ' + this.renderer.tObj.numTriangles.toLocaleString() + '\n' +
                  'Num Vertices: ' + this.renderer.tObj.numVertices.toLocaleString() + '\n'
               );
               break;

            case 'l':
               if (this.renderer.options.lightType === LightType.Point) {
                  this.renderer.options.lightType = LightType.Directional;
               }
               else {
                  this.renderer.options.lightType = LightType.Point;
               }
               this.dirty = true;
               break;

            case 'o':
               this.optimize(NormalType.Smooth);
               break;

            case 'p':
               this.optimize(NormalType.Flat);
               break;

            case 'r':
               this.renderer.tObj.reverse();
               this.renderer.obj.uploadTriangles();
               this.dirty = true;
               break;

            case 's':
               this.save();
               break;

            case 't':
               this.dirty = true;
               break;

            case 'v':
               this.renderer.options.camera.useOrthographic = !this.renderer.options.camera.useOrthographic;
               this.dirty = true;
               break;
         }
      }
      window.addEventListener('resize', () => {

         this.updateSize();
         this.dirty = true;
      });
   }

   private createPerspectivePanel(div: HTMLDivElement) {

      this.perspectivePanel = new PerspectivePanel(div, 'PerspectivePanel', this.renderer.options.camera);
      this.perspectivePanel.onShow = (panel: Panel) => {
         this.valuePlanesPanel.visible = false;
         this.updateSize();
         this.dirty = true;
      }
      this.perspectivePanel.onHide = () => {
         this.updateSize();
         this.pointerMode = PointerMode.View;
         this.dirty = true;
      }

      this.perspectivePanel.onChange = () => {
         this.dirty = true;
      }
   }

   private createValuePlanesPanel(div: HTMLDivElement) {

      this.valuePlanesPanel = new ValuePlanesPanel(div, 'ValuePlanesPanel', this.renderer.options.valueRange);
      this.valuePlanesPanel.onShow = (panel: Panel) => {
         this.perspectivePanel.visible = false;

         this.updateSize();
         this.renderer.options.renderMode = RenderMode.ContourPlanes;
         this.valuePlanesPanel.toRenderer(this.renderer);

         this.dirty = true;
      }
      this.valuePlanesPanel.onHide = () => {
         this.updateSize();
         this.renderer.options.renderMode = RenderMode.Normal;
         this.renderer.options.valueRange = ValueRange.Standard;
         this.dirty = true;
      }
      this.valuePlanesPanel.onChange = () => {
         this.valuePlanesPanel.toRenderer(this.renderer);
         this.dirty = true;
      }
   }

   public buildMenu(menubar: Menubar): void {
      createModelsMenu(menubar, (file) => this.loadModel(file));

      let subMenu: SubMenu;
      subMenu = menubar.addSubMenu('Tools', 'Tools');

      const contoursSubMenu = subMenu.addSubMenu('Color Contours');
      contoursSubMenu.addRadiobutton({
         label: 'None',
         group: 'ContourGroup',
         checked: () => {
            if (this.renderer.options.renderMode === RenderMode.ContourPlanes ||
               this.renderer.options.renderMode === RenderMode.ContourValues) {
               return false;
            }
            else {
               return true;
            }
         },
         oncheck: (button: Radiobutton) => {
            this.valuePlanesPanel.visible = false;
            this.renderer.options.renderMode = RenderMode.Normal;
            this.dirty = true;
         }
      });
      contoursSubMenu.addRadiobutton({
         label: 'Planes',
         group: 'ContourGroup',
         checked: () => {
            return (this.renderer.options.renderMode === RenderMode.ContourPlanes && this.valuePlanesPanel.visible === false);
         },
         oncheck: (button: Radiobutton) => {
            this.valuePlanesPanel.visible = false;
            this.renderer.options.contours = COLOR_CONTOURS;
            this.renderer.options.renderMode = button.checked ? RenderMode.ContourPlanes : RenderMode.Normal;
            this.dirty = true;
         }
      });
      contoursSubMenu.addRadiobutton({
         label: 'Values',
         group: 'ContourGroup',
         checked: () => {
            return (this.renderer.options.renderMode === RenderMode.ContourValues && this.valuePlanesPanel.visible === false);
         },
         oncheck: (button: Radiobutton) => {
            this.valuePlanesPanel.visible = false;
            this.renderer.options.contours = COLOR_CONTOURS;
            this.renderer.options.renderMode = button.checked ? RenderMode.ContourValues : RenderMode.Normal;
            this.dirty = true;
         }
      });

      const highlightSubMenu = subMenu.addSubMenu('Highlights');

      highlightSubMenu.addRadiobutton({
         label: 'Show',
         group: 'HighlightsGroup',
         checked: () => this.renderer.options.showHighlights && this.renderer.renderModeCanToggleHighlights(),
         oncheck: (button: Radiobutton) => {
            this.renderer.options.showHighlights = true;
            if (this.renderer.options.renderMode === RenderMode.EmphasizeHighlights) {
               this.renderer.options.renderMode = RenderMode.Normal;
            }
            this.dirty = true;
         }
      });

      highlightSubMenu.addRadiobutton({
         label: 'Hide',
         group: 'HighlightsGroup',
         checked: () => !this.renderer.options.showHighlights && this.renderer.renderModeCanToggleHighlights(),
         oncheck: (button: Radiobutton) => {
            this.renderer.options.showHighlights = false;
            if (this.renderer.options.renderMode === RenderMode.EmphasizeHighlights) {
               this.renderer.options.renderMode = RenderMode.Normal;
            }
            this.dirty = true;
         }
      });

      highlightSubMenu.addRadiobutton({
         label: 'Emphasize',
         group: 'HighlightsGroup',
         checked: () => this.renderer.options.renderMode === RenderMode.EmphasizeHighlights,
         oncheck: (button: Radiobutton) => {
            this.renderer.options.showHighlights = true;
            this.renderer.options.renderMode = RenderMode.EmphasizeHighlights;
            this.dirty = true;
         }
      });

      highlightSubMenu.addSlider({
         label: 'Shininess',
         min: 1,
         max: 50,
         value: this.renderer.options.shininess,
         oninput: (slider: Slider) => {
            this.renderer.options.shininess = slider.value;
            this.dirty = true;
         },
      });

      let shadowsSubMenu = subMenu.addSubMenu('Shadows');
      shadowsSubMenu.addRadiobutton({
         label: 'Normal',
         group: 'ShadowGroup',
         checked: () => this.renderer.options.renderMode == RenderMode.Normal,
         oncheck: (button: Radiobutton) => {
            this.renderer.options.renderMode = RenderMode.Normal;
            this.dirty = true;
         }
      });
      shadowsSubMenu.addRadiobutton({
         label: 'Highlight Terminator',
         group: 'ShadowGroup',
         checked: () => this.renderer.options.renderMode == RenderMode.HighlightTerminator,
         oncheck: (button: Radiobutton) => {
            this.renderer.options.renderMode = RenderMode.HighlightTerminator;
            this.dirty = true;
         }
      });
      shadowsSubMenu.addRadiobutton({
         label: 'Highlight Shadow',
         group: 'ShadowGroup',
         checked: () => this.renderer.options.renderMode == RenderMode.HighlightShadow,
         oncheck: (button: Radiobutton) => {
            this.renderer.options.renderMode = RenderMode.HighlightShadow;
            this.dirty = true;
         }
      });
      shadowsSubMenu.addRadiobutton({
         label: 'Light and Shadow Only',
         group: 'ShadowGroup',
         checked: () => this.renderer.options.renderMode == RenderMode.LightAndShadow,
         oncheck: (button: Radiobutton) => {
            this.renderer.options.renderMode = RenderMode.LightAndShadow;
            this.dirty = true;
         }
      });

      subMenu.addItem('Perspective...', () => {
         this.perspectivePanel.visible = true;
      });

      subMenu.addItem('Value Planes...', () => {
         this.valuePlanesPanel.visible = true;
      });

      const lightSubMenu = subMenu.addSubMenu('Light');
      lightSubMenu.addRadiobutton({
         label: 'Directional Light',
         group: 'LightTypeGroup',
         checked: () => this.renderer.options.lightType === LightType.Directional,
         oncheck: (button: Radiobutton) => {
            this.renderer.options.lightType = LightType.Directional;
            this.dirty = true;
         }
      });
      lightSubMenu.addRadiobutton({
         label: 'Point Light',
         group: 'LightTypeGroup',
         checked: () => this.renderer.options.lightType === LightType.Point,
         oncheck: (button: Radiobutton) => {
            this.renderer.options.lightType = LightType.Point;
            this.dirty = true;
         }
      });
      lightSubMenu.addSlider({
         label: 'Falloff',
         min: 0,
         max: 0.9,
         value: this.renderer.options.falloff,
         oninput: (slider: Slider) => {
            this.renderer.options.falloff = slider.value;
            this.dirty = true;
         },
      });

      lightSubMenu.addSlider({
         label: 'Intensity',
         min: 0.5,
         max: 1.5,
         value: this.renderer.options.lightIntensity,
         oninput: (slider: Slider) => {
            this.renderer.options.lightIntensity = slider.value;
            this.dirty = true;
         },
      });

      lightSubMenu.addSlider({
         label: 'Ambient Intensity',
         min: 0.0,
         max: 0.4,
         value: this.renderer.options.valueRange.ambientIntensity,
         oninput: (slider: Slider) => {
            this.renderer.options.valueRange.ambientIntensity = slider.value;

            const range = 0.6;
            const baseVal = this.baseBackgroundColor.v;
            const newVal = (baseVal - range / 2) + range * slider.valueAsPercent;
            const newColor = new hsvColor([this.baseBackgroundColor.h, this.baseBackgroundColor.s, newVal]);
            (<HTMLCanvasElement>this.gl.canvas).style.backgroundColor = newColor.toHtmlColor().toCss();

            this.dirty = true;
         },
      });

      subMenu = menubar.addSubMenu('Options', 'Options');

      let resetSubMenu = subMenu.addSubMenu('Reset');
      resetSubMenu.addItem('All', () => {
         this.renderer.reset(Reset.All);
         this.dirty = true;
      });
      resetSubMenu.addItem('Lights', () => {
         this.renderer.reset(Reset.Lights);
         this.dirty = true;
      });
      resetSubMenu.addItem('View', () => {
         this.renderer.reset(Reset.View);
         this.dirty = true;
      });
      resetSubMenu.addItem('Rendering', () => {
         this.renderer.reset(Reset.Rendering);
         this.dirty = true;
      });

      let floorSubMenu = subMenu.addSubMenu('Floor');
      floorSubMenu.addCheckbox({
         label: 'Show Floor',
         checked: () => this.renderer.showFloor,
         oncheck: (checkbox: Checkbox) => {
            this.renderer.showFloor = checkbox.checked;
            this.dirty = true;
         }
      });
      floorSubMenu.addCheckbox({
         label: 'Show Grid',
         checked: () => this.renderer.showGrid,
         oncheck: (checkbox: Checkbox) => {
            this.renderer.showGrid = checkbox.checked;
            this.dirty = true;
         }
      });
      subMenu.addItem('Reverse Object', () => {
         this.renderer.tObj.reverse();
         this.renderer.obj.uploadTriangles();
         this.dirty = true;
      });

      let rotateSubMenu = subMenu.addSubMenu('Rotation');
      rotateSubMenu.addCheckbox({
         label: 'Keep the light pointing at the same spot on the model',
         checked: () => this.rotateLightWithObject,
         oncheck: (checkbox: Checkbox) => {
            this.rotateLightWithObject = checkbox.checked;
         }
      });
      rotateSubMenu.addCheckbox({
         label: 'Rotate model independent of the floor',
         checked: () => this.renderer.lockFloor,
         oncheck: (checkbox: Checkbox) => {
            this.renderer.lockFloor = checkbox.checked;
         }
      });
   }

   private optimize(normalType: NormalType) {

      let obj = this.renderer.obj;
      let oldNumVertices = obj.tObj.numVertices;

      obj.optimize(normalType);

      let newNumVertices = obj.tObj.numVertices;

      //let msg = 'Optimized .OBJ content copied to clipboard\n\n';
      let msg = 'Optimized .OBJ content\n\n';
      msg += 'Num Triangles: ' + obj.tObj.numTriangles + '\n';
      msg += 'Num Vertices: ' + oldNumVertices + ' to ' + newNumVertices + ', ' + (100 * newNumVertices / oldNumVertices).toFixed() + ' %\n';
      alert(msg);

      //let str = obj.tObj.toObjString(6);
      //navigator.clipboard.writeText(str).then(() => { alert(msg) });

      this.dirty = true;
   }

   private updateSize() {

      let gl = this.gl;

      let width = window.innerWidth;
      let height = window.innerHeight;
      let menubarHeight = document.getElementById('Menubar').clientHeight;

      let panelHeight = 0;
      if (this.perspectivePanel.visible) {
         panelHeight = this.perspectivePanel.div.clientHeight;
      }
      else if (this.valuePlanesPanel.visible) {
         panelHeight = this.valuePlanesPanel.div.clientHeight;
      }

      gl.canvas.width = width;
      gl.canvas.height = height - menubarHeight - panelHeight;
      this.overlay.width = gl.canvas.width;
      this.overlay.height = gl.canvas.height;
   }

   private loadModel(file: string) {

      const lc = file.toLowerCase();
      if (lc.endsWith('.obj') || lc.endsWith('.blob')) {

         const statusFunc = (status: string) => {
            this.overlay.clear();
            this.overlay.fillText(status);
         }

         this.loader.loadModelFile(file, statusFunc)
            .then((tObj) => {

               this.perspectivePanel.visible = false;
               this.valuePlanesPanel.visible = false;

               this.renderer.setModel(tObj);
               this.perspectivePanel.setModel(tObj);
               this.loader.orient(this.renderer.obj);

               if (file.startsWith('Head') || file.startsWith('Teapot') || file.startsWith('Male_02')) {
                  this.renderer.options.useCulling = false;
               }

               this.animate = false;
               this.dirty = true;
               this.pointerMode = PointerMode.View;
               if (!this.animationFrame) {
                  this.animationFrame = requestAnimationFrame(() => this.tick());
               }

               /*
               let box = BoundingBox.infinite;
               box.max.x = 62.1;
               this.trim(tObj, box);

               this.loader.loadModelFile('SubTool3.blob', statusFunc).then((tObj2) => {
                  tObj.combine(tObj2);
                  return tObj;
               }).then(() => {
                  this.renderer.setModel(tObj);

                  this.dirty = true;
                  requestAnimationFrame(() => this.tick());
               });
               */
            });
      }
      else if (lc === 'sphere') {
         let tObj = new TriangleObjBuilder();
         tObj.addSphere(100, 1, new Vec3([0, 0, 0]));
         tObj.optimize(NormalType.Smooth);
         this.renderer.setModel(tObj);
         this.perspectivePanel.setModel(tObj);
         this.animate = false;
         this.dirty = true;
         this.pointerMode = PointerMode.View;
         if (!this.animationFrame) {
            this.animationFrame = requestAnimationFrame(() => this.tick());
         }

      }
      else {
         // TODO multi line error messages not supported
         this.overlay.clear();
         this.overlay.fillText('Unknown Model:' + file);
      }
   }

   private toggleMode() {
      switch (this.pointerMode) {
         case PointerMode.View:
            this.pointerMode = PointerMode.Light;
            this.renderer.ballColor = this.renderer.yellow;
            break;

         case PointerMode.Light:
            this.pointerMode = PointerMode.View;
            this.renderer.ballColor = glColor3.modelWhite;
            break;
      }
      this.dirty = true;
   }

   private rotateLight(xRad: number, yRad: number) {
      this.renderer.rotateLight(xRad, yRad);

      this.dirty = true;
   }

   private rotateObjects(xRad: number, yRad: number) {

      // get the light vector with model transformation undone
      let vec = Vec4.fromVec3(this.renderer.options.lightPos, 1);
      vec = this.renderer.obj.model.inverse().multV(vec);

      if (this.renderer.lockFloor) {

         // rotate in all directions if we're just rotating the object in space
         this.renderer.rotX(yRad);
         this.renderer.rotY(xRad);

         if (this.rotateLightWithObject) {
            // apply the changes to the light
            vec = this.renderer.obj.model.multV(vec);
            this.renderer.options.lightPos = vec.xyz;
         }
      }
      else {

         // if the floor moves with the object, then up-down movement tilts the
         // whole scene while left-right movement only spins the model
         this.renderer.rotX(yRad);

         if (this.rotateLightWithObject) {
            this.renderer.preRotY(xRad);
            vec = this.renderer.obj.model.multV(vec);
         }
         else {
            vec = this.renderer.obj.model.multV(vec);
            this.renderer.preRotY(xRad);
         }

         // apply the changes to the light
         this.renderer.options.lightPos = vec.xyz;
      }
   }

   private onDrag(pos: Vec2, delta: Vec2) {
      this.dirty = true;

      if (this.pointerMode === PointerMode.View) {
         this.rotateObjects(-delta.x * 0.01, -delta.y * 0.01);
      }
      else if (this.pointerMode === PointerMode.Light) {
         this.rotateLight(-delta.x * 0.01, -delta.y * 0.01);
      }
   }

   /**
    * Processes a click/touch event at the designated coordinates.
    * 
    * @param x The x coordinate.
    * @param y The y coordinate.
    * @returns true if a hit on one of the views occurs.
    */
   private onClick(pos: Vec2): boolean {

      let canvasWidth = this.gl.canvas.width;
      let canvasHeight = this.gl.canvas.height;
      let clipSpace = this.renderer.options.camera.getClipSpace(this.gl);
      let miniWidth = this.renderer.miniSize * (2 / clipSpace.width) * canvasWidth;
      let miniHeight = this.renderer.miniSize * (2 / clipSpace.height) * canvasHeight;

      if (pos.x < miniWidth && pos.y < miniHeight) {
         this.toggleMode();
         return true;
      }

      // not handled
      return false;
   }

   private onScale(scale: number, change: number) {
      this.renderer.options.camera.zoom(change);
      this.dirty = true;
   }

   private onRotate(angle: number, delta: number) {
      // get the light vector with model transformation undone
      let vec = Vec4.fromVec3(this.renderer.options.lightPos, 1);
      vec = this.renderer.obj.model.inverse().multV(vec);

      this.renderer.rotZ(delta);

      // apply the updated transform 
      if (this.rotateLightWithObject) {
         vec = this.renderer.obj.model.multV(vec);
         this.renderer.options.lightPos = vec.xyz;
      }

      this.dirty = true;
   }

   private onTranslate(delta: Vec2) {

      // TODO how can this scaling be detected from javascript?
      let factor = 1;
      if (isMobile) {
         factor = 2;
      }

      let clipSpace = this.renderer.options.camera.getClipSpace(this.gl);
      this.renderer.options.camera.translate(new Vec2([
         factor * clipSpace.width * delta.x / this.gl.canvas.width,
         factor * clipSpace.height * delta.y / this.gl.canvas.height
      ]));
      this.dirty = true;
   }

   public tick() {

      this.fps.tick();

      if (this.dirty) {
         this.renderer.render();
         if (this.perspectivePanel.visible) {
            // synchronize the rotation matrices
            this.perspectivePanel.render(this.renderer.obj.model.clone());
         }
         this.dirty = false;
      }

      if (this.animate) {
         if (this.loader.loading === false) {
            this.overlay.clear();
            this.overlay.fillText(this.fps.rate.toFixed() + ' fps ' + this.fps.ms.toFixed(1) + ' ms', TextLocation.BottomLeft);
         }

         // get the light vector with model transformation undone
         let vec = Vec4.fromVec3(this.renderer.options.lightPos, 1);
         vec = this.renderer.obj.model.inverse().multV(vec);

         // animate
         this.renderer.preRotY(toRad(-1));

         // apply the updated transform 
         if (this.rotateLightWithObject) {
            vec = this.renderer.obj.model.multV(vec);
            this.renderer.options.lightPos = vec.xyz;
         }

         this.dirty = true;
      }

      requestAnimationFrame(() => this.tick());
   }

   private save() {
      let tObj = this.renderer.tObj;

      let name = tObj.name.split('.')[0] + '.blob';
      tObj.name = name;
      saveAs(tObj.toBlob(), name);
   }
}
