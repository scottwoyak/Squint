import 'webrtc-adapter';
import { IApp } from '../../IApp';
import { IVideoConstraint, Camera } from './Camera';
import { Slider } from '../../GUI/Slider';
import { Menubar } from '../../GUI/Menu';
import { Version } from './Version';
import { GUI } from '../../GUI/GUI';
import NoSleep from 'nosleep.js';
import { pxToNumber } from '../../Util/Globals';
import { ImageFilter } from './ImageFilter';

export class SeeApp implements IApp {
   private div: HTMLDivElement;

   private camera: Camera | undefined;
   private canvas: HTMLCanvasElement;
   private chroma: Slider;
   private numLevels: Slider;

   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
   private noSleep = new NoSleep();


   public constructor() {

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      this.noSleep.enable();

      document.title += (' ' + Version.Build);
   }

   public create(div: HTMLDivElement): void {

      div.id = 'ArtSeeApp';

      this.div = GUI.create('div', 'BodyDiv', div);

      this.canvas = GUI.create('canvas', 'Canvas', this.div);

      this.numLevels = new Slider(this.div, {
         label: 'Levels',
         min: 2,
         max: 25,
         value: 5,
         onGetText: (slider) => {
            if (slider.value === slider.max) {
               return '∞';
            }
            else {
               return slider.value.toFixed(0)
            }
         }
      });

      this.chroma = new Slider(this.div, {
         label: 'Chroma',
         min: 0,
         max: 200,
         value: 100,
         onGetText: (slider) => slider.value.toFixed(0) + '%',
      });

      this.camera = new Camera(this.div);

      Camera.getCameras((constraint: IVideoConstraint, cameraIndex: number, numCameras: number) => {
         if (cameraIndex === (numCameras - 1)) {
            this.camera.start(constraint)
               .catch((err) => {
                  alert('Cannot start camera: ' + err);
               });
         }
      });

      window.addEventListener('resize', () => this.updateSizes());
      this.updateSizes();

      // kick off the rendering loop
      this.drawImg();
   }

   public buildMenu(menubar: Menubar): void {

      const cameraMenu = menubar.addSubMenu('Camera');

      Camera.getCameras((constraint: IVideoConstraint, cameraIndex: number, numCameras: number) => {
         const radioButton = cameraMenu.addRadiobutton(
            {
               label: constraint.label,
               oncheck: () => {
                  this.camera.start(constraint)
                     .catch((err) => {
                        alert('Cannot start camera: ' + err);
                     });
               },
               checked: cameraIndex === (numCameras - 1),
               group: 'CamerasGroup',
            });
      });
   }

   private updateSizes() {
      let menuBar = document.getElementById('Menubar');
      const menubarHeight = menuBar.getBoundingClientRect().height;

      let style = getComputedStyle(this.chroma.div);
      const sliderHeight = this.chroma.div.getBoundingClientRect().height + pxToNumber(style.marginTop) + pxToNumber(style.marginBottom);

      const viewWidth = window.innerWidth;
      const viewHeight = window.innerHeight;

      this.canvas.width = viewWidth;
      this.canvas.height = viewHeight - menubarHeight - 2 * sliderHeight;
   }


   private busy = false;

   private drawImg() {

      requestAnimationFrame(() => this.drawImg());
      if (this.busy) {
         return;
      }

      this.busy = true;
      const canvasWidth = this.canvas.width;
      const canvasHeight = this.canvas.height;
      const canvasAR = canvasWidth / canvasHeight;

      const cameraWidth = this.camera.videoWidth;
      const cameraHeight = this.camera.videoHeight;
      const cameraAR = cameraWidth / cameraHeight;

      let width: number;
      let height: number;

      if (canvasAR > cameraAR) {
         height = canvasHeight;
         width = height * cameraAR;
      }
      else {
         width = canvasWidth;
         height = width / cameraAR;
      }

      let megaPixels = width * height / (1000 * 1000);
      let scale = 1;
      while (megaPixels > 1) {
         megaPixels /= 4;
         width /= 2;
         height /= 2;
         scale /= 2;
      }

      let numLevels = this.numLevels.value < this.numLevels.max ? this.numLevels.value : NaN;

      let blurSize = 0;
      if (isNaN(numLevels) === false) {
         blurSize = Math.min(3, 30 / numLevels);
      }

      let imageData = this.camera.takePicture2(megaPixels, blurSize);

      if (imageData !== null) {

         const ctx = this.canvas.getContext('2d');


         if (this.chroma.value !== 100) {
            ImageFilter.chroma(imageData, this.chroma.value);
         }

         let white = 1;
         let black = 0;
         let midPt = 0.5;
         let midValue = 0.5;
         if (isNaN(numLevels) === false) {
            ImageFilter.levels(imageData, white, black, midPt, midValue, numLevels);
         }

         let tempCanvas = document.createElement('canvas');
         tempCanvas.width = width;
         tempCanvas.height = height;
         let tempCtx = tempCanvas.getContext('2d');
         tempCtx.putImageData(imageData, 0, 0);

         width /= scale;
         height /= scale;
         ctx.drawImage(tempCanvas, (canvasWidth - width) / 2, (canvasHeight - height) / 2, width, height);
      }

      this.busy = false;
   }
}
