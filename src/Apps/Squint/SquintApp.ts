import 'webrtc-adapter';
import { IApp } from '../../IApp';
import { PointerEventHandler } from '../../GUI/PointerEventHandler';
import { IVideoConstraint, Camera, IMediaSettingsRange, IVideoTrackAdvancedCapabilities, IVideoTrackAdvancedSettings, AdvancedConstraintName, IAdvancedConstraint, CameraRotation } from './Camera';
import { Uploader } from './Uploader';
import { Slider } from '../../GUI/Slider';
import { ICtrl } from '../../GUI/ICtrl';
import { toSizeStr, isMobile, baseUrl } from '../../Util/Globals';
import { Vec2 } from '../../Util3D/Vec';
import { Menubar, SubMenu } from '../../GUI/Menu';
import { ConsoleCapture } from '../../Util/ConsoleCapture';
import { StartDialog } from './StartDialog';
import { Version } from './Version';
import { Squint } from './Squint';
import { WelcomeDialog } from './WelcomeDialog';
import { UserNameDialog } from './UserNameDialog';
import { GUI } from '../../GUI/GUI';
import { ChatPanel } from './ChatPanel';
import { BandwidthTracker } from './BandwidthTracker';
import { SquintEvent } from './SquintEvents';
import NoSleep from 'nosleep.js';
import { WebSocketFactory } from './WebSocketFactory';
import { IConnectionInfoBasic } from './SquintMessage';
import { StorageWithEvents, StorageItem } from './StorageWithEvents';
import { SquintStrings } from './SquintStrings';
import { PasswordDialog } from './PasswordDialog';
import { ImageCanvas } from './ImageCanvas';
import { LevelsPanel } from './LevelsPanel';
import { SquintModelTimerPanel } from './SquintModelTimerPanel';
import { Sounds } from './Sounds';
import { ZoomPanel } from './ZoomPanel';

WebSocketFactory.create = (url: string) => new WebSocket(url);

export function debug(msg: string): void {
   console.error(msg);
   //alert('debug error: ' + msg);
}

interface IConstraintItem {
   constraint: AdvancedConstraintName,
   label: string,
}

interface IPreferredCamera {
   deviceId: string,
   // capture area
   // rotation
   // megapixels
   // jpeg
}

export class SquintApp implements IApp {
   private div: HTMLDivElement | undefined;
   private userNameMenuItemDiv: HTMLDivElement | undefined;
   private img: HTMLImageElement | undefined;
   private dirty = true;
   private chatPanel: ChatPanel | undefined;
   private levelsPanel: LevelsPanel;
   private notificationDiv: HTMLDivElement | undefined;
   private cameraMenu: SubMenu | undefined;
   private remoteCameraMenu: SubMenu | undefined;
   private storage = new StorageWithEvents();

   private camera: Camera | undefined;
   private canvas: ImageCanvas;
   private overlayCanvas: HTMLCanvasElement;
   private desired: IVideoConstraint = {
      label: '',
      width: 0,
      height: 0,
      frameRate: 0,
      facingMode: '',
      deviceId: '',
   };
   private uploader: Uploader | null = null;
   private downloadTracker = new BandwidthTracker();

   private jpegQuality: Slider | undefined;
   private megaPixels: Slider | undefined;
   private cameraCtrls: ICtrl[] = [];
   private timerPanel: SquintModelTimerPanel;
   private zoomPanel: ZoomPanel;


   private advancedConstraints: IAdvancedConstraint[] = [];
   private advancedSubMenu?: SubMenu;

   private squint = new Squint();

   private startDialog: StartDialog | undefined;

   private console: ConsoleCapture;

   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
   private noSleep = new NoSleep();


   public constructor() {

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      this.noSleep.enable();

      document.title += (' ' + Version.Build);

      // trigger the tracking page
      va("send", "event", "Application", "Start", "Squint App");

      //localStorage.removeItem(StorageItem.UserName); // simulates starting up the first time

      this.squint.on({
         event: SquintEvent.Image,
         handler: ((blob: Blob) => { this.onDownload(blob); })
      });

      this.squint.on({
         event: SquintEvent.Close,
         handler: (() => { this.closeConnection(); })
      });

      this.squint.on({
         event: SquintEvent.ChatMessage,
         handler: ((connection, msg) => { this.onChatMessage(connection, msg); })
      });

      this.squint.on({
         event: SquintEvent.Reconnecting,
         handler: () => {
            console.log('connection lost, reconnecting...');
            this.showNotification('Connection lost, reconnecting');
            this.dirty = true;
         }
      });

      this.squint.on({
         event: SquintEvent.Reconnected,
         handler: (success: boolean) => {
            console.log('reconnected: success=' + success);

            if (success === false) {
               this.showNotification('Could not reconnect');
            }
            else {
               this.showNotification('Reconnected');
            }
            this.dirty = true;
         }
      });

      this.squint.on({
         event: SquintEvent.CameraRequest,
         handler: (megaPixels: number, jpegQuality: number) => {
            this.megaPixels.value = megaPixels
            this.jpegQuality.value = jpegQuality;
         }
      });

      this.squint.on({
         event: SquintEvent.HostDisconnected,
         handler: () => {
            this.dirty = true;
         }
      });

      this.squint.on({
         event: SquintEvent.HostChanged,
         handler: (newHostConnectionId: string) => {
            // TODO make sure we're not calling things twice
            if (newHostConnectionId === this.squint.connectionId) {
               this.enableVideo(true);
               this.startUploader();
            }
            else {
               this.stopUploader();
               this.enableVideo(false);
            }
         }
      })

      this.storage.on(StorageItem.UserName, (userName) => {

         this.userNameMenuItemDiv.innerText = 'Hi ' + userName;
         this.squint.userName = userName;
      });

      document.addEventListener('visibilitychange', () => {
         if (document.visibilityState === 'visible') {
            if (this.uploader) {
               this.uploader.resume();
            }
            this.downloadTracker.resume();
            this.squint.synchronizeTimer();
         }
         else {
            if (this.uploader) {
               this.uploader.pause();
            }
            this.downloadTracker.pause();
         }
      });


      // How do you know when to close the socket? pageHide on some browsers and beforeunload/unload on
      // others. Safari seems most problematic as the actual SocketClose only randomly makes it back to
      // the server so the server doesn't know it has been a gracefull exit.
      window.addEventListener('pagehide', () => {
         if (this.squint.connected) {
            this.squint.close();
         }
      });
      window.addEventListener('beforeunload', () => {
         if (this.squint.connected) {
            this.squint.close();
         }
      });

      window.addEventListener('pageshow', () => {
         if (this.squint.connected === false) {
            this.stopUploader();
            this.enableVideo(false);
            this.startDialog.visible = true;
         }
         // TODO remove
         console.log('pageshow');
      });
      document.addEventListener('resume', () => {
         if (this.squint.connected === false) {
            this.stopUploader();
            this.enableVideo(false);
            this.startDialog.visible = true;
         }
         console.log('resume');
      });
      /*
      window.addEventListener('pageshow', () => {
         console.log('pageshow');
      });

      document.addEventListener('freeze', () => {
         console.log('freeze');
      });

      document.addEventListener('resume', () => {
         console.log('resume');
      });

      window.addEventListener('beforeunload', () => {
         console.log('beforeunload');
      });
   
      window.addEventListener('pagehide', () => {
         console.log('pagehide');
      });
   
      window.addEventListener('unload', () => {
         console.log('unload');
      });
      */

   }

   public create(div: HTMLDivElement): void {

      div.id = 'SquintApp';

      let onJoinSession = (sessionId: string) => {
         this.join(sessionId);
      };

      let onStartSession = (password: string) => {
         this.squint.createSession(password)
            .then(() => {
               this.enableVideo(true);
            })
            .catch((err) => {
               alert(err);
               this.startDialog.visible = true;
            })
      };

      this.startDialog = new StartDialog(
         div,
         this.squint,
         onJoinSession,
         onStartSession,
         this.storage
      );

      this.div = GUI.create('div', 'BodyDiv', div);

      this.console = new ConsoleCapture(this.div);
      this.console.onMessage = (msg: string) => {
         this.squint.log(msg);
      }

      this.canvas = new ImageCanvas(this.div, 'Canvas');
      this.overlayCanvas = GUI.create('canvas', 'OverlayCanvas', this.div, 'Overlay');

      this.camera = new Camera(this.div);
      this.camera.visible = false;

      this.camera.onPaused = () => {
         this.squint.cameraPaused();
      }
      this.squint.on({
         event: SquintEvent.CameraPaused,
         handler: () => {
            this.dirty = true;
         }
      });

      this.timerPanel = new SquintModelTimerPanel(this.squint.modelTimer, this.div);
      this.zoomPanel = new ZoomPanel(this.div);

      this.zoomPanel.onChange = () => {
         let change = this.zoomPanel.zoom / this.canvas.zoom
         this.canvas.zoom *= change;
         this.canvas.xOffset *= change;
         this.canvas.yOffset *= change;
         this.dirty = true;
      }

      this.chatPanel = new ChatPanel(this.squint, this.div);
      if (this.chatPanel.hasSavedSettings) {
         this.chatPanel.restoreSettings();
      }
      else {
         if (isMobile === false) {
            this.chatPanel.visible = true;
         }
      }

      this.levelsPanel = new LevelsPanel(this.div);
      if (this.levelsPanel.hasSavedSettings) {
         this.levelsPanel.restoreSettings();
      }
      this.levelsPanel.onChange = () => {
         this.canvas.white = this.levelsPanel.white;
         this.canvas.black = this.levelsPanel.black;
         this.canvas.midPt = this.levelsPanel.midPoint;
         this.canvas.midValue = this.levelsPanel.midValue;
         this.canvas.numLevels = this.levelsPanel.numLevels;
         this.canvas.chroma = this.levelsPanel.chroma;
         this.dirty = true;
      }

      this.notificationDiv = GUI.create('div', 'NotificationDiv', this.div);

      let handler = new PointerEventHandler(this.canvas.element);
      handler.onScale = (scale: number, change: number) => this.onScale(scale, change);
      handler.onTranslate = (delta: Vec2) => this.onTranslate(delta);
      handler.onDrag = (pos: Vec2, delta: Vec2) => this.onDrag(pos, delta);

      window.addEventListener('resize', () => this.updateSizes());
      this.updateSizes();

      if (this.storage.has(StorageItem.UserName) === false) {
         this.showWelcomeDialog();
      }
      else {
         this.startDialog.visible = false;
      }

      document.onkeydown = (event: KeyboardEvent) => {
         if (this.squint.connected && event.target instanceof HTMLInputElement === false) {
            switch (event.key) {

               case 'x':
                  // simulate killing the connection
                  this.squint.ws.close(3000);
                  break;

               case '1':
                  if (event.altKey) {
                     this.remoteCameraMenu.hidden = !this.remoteCameraMenu.hidden;
                  }
                  break;
            }
         }
      }

      // kick off the rendering loop
      this.drawImg();
   }

   private join(sessionId: string, password?: string): void {
      this.squint.joinSession(sessionId, password)
         .then(() => {
            this.startDialog.visible = false;
         })
         .catch((err) => {
            if (password !== undefined) {
               alert('Incorrect Password');
            }

            if (err === SquintStrings.CANNOT_JOIN_SESSION__INVALID_PASSWORD) {
               let dlg: PasswordDialog;
               let okHandler = (password: string) => {
                  this.join(sessionId, password);

                  // do this last as it stops execution of this handler when content 
                  // is removed from the DOM
                  dlg.dispose();
               }
               let cancelHandler = () => {
                  dlg.dispose();
               }
               dlg = new PasswordDialog(this.div, okHandler, cancelHandler);
            }
            else {
               alert(err);
            }
            this.startDialog.visible = true;
         });

   }
   private showWelcomeDialog(): void {
      const welcomeDialog = new WelcomeDialog(this.div, (userName) => {
         this.storage.set(StorageItem.UserName, userName);
         this.startDialog.visible = true;
      });
      welcomeDialog.visible = true;
   }

   public closeConnection(): void {
      if (this.squint.connected) {
         this.squint.close();
      }

      this.stopUploader();
      this.enableVideo(false);
      this.startDialog.visible = true;

      this.canvas.clear();
   }

   private startSession(): void {
      this.startUploader();
   }

   private startUploader(): void {
      if (this.uploader === null) {
         this.uploader = new Uploader(
            this.squint,
            () => this.takePicture()
         );
      }
   }

   private stopUploader(): void {
      if (this.uploader) {
         this.uploader.stop();
         this.uploader = null;
      }
   }




   private enableCameraCtrls(flag: boolean) {
      this.cameraMenu.enabled = flag;
      for (let i = 0; i < this.cameraCtrls.length; i++) {
         this.cameraCtrls[i].enabled = flag;
      }
   }

   public buildMenu(menubar: Menubar): void {

      const optionsMenu = menubar.addSubMenu('Options');

      this.cameraMenu = optionsMenu.addSubMenu('Camera');

      // TODO just fully disable all the menu items instead of the menu itself.
      this.cameraMenu.enabled = false;

      let preferredCamera: IPreferredCamera = {
         deviceId: undefined,
      }
      if (this.storage.has(StorageItem.Camera)) {
         preferredCamera = JSON.parse(this.storage.get(StorageItem.Camera));
      }

      let preferredFound = false;
      Camera.getCameras((constraint, cameraIndex, numCameras) => {

         let selected = preferredCamera.deviceId && constraint.deviceId === preferredCamera.deviceId;

         if (preferredFound === false) {
            if (selected) {
               preferredFound = true;
            }
            else if (cameraIndex === (numCameras - 1)) {
               // if a preferred camera was not found and this is the last entry, make it the preferred one
               preferredFound = true;
               selected = true;
            }
         }

         const radioButton = this.cameraMenu.addRadiobutton(
            {
               label: constraint.label,
               oncheck: () => {
                  this.desired = constraint;
                  this.enableVideo(true);
               },
               checked: selected,
               group: 'CamerasGroup',
            });
         if (selected) {
            this.desired = constraint;
         }

         this.cameraCtrls.push(radioButton);
      })

      this.jpegQuality = this.cameraMenu.addSlider({
         label: 'JPeg Photo Quality',
         min: 0.1,
         max: 1,
         value: 0.5,
         onGetText: (slider) => (100 * slider.value).toFixed() + '%',
      });
      this.cameraCtrls.push(this.jpegQuality);

      this.megaPixels = this.cameraMenu.addSlider({
         label: 'Camera Mega-Pixels',
         min: 0.25,
         max: 5,
         value: 1.25,
         onGetText: (slider) => slider.value.toFixed(2),
      });
      this.cameraCtrls.push(this.megaPixels);

      let rotationSubMenu = this.cameraMenu.addSubMenu('Rotation');
      rotationSubMenu.addRadiobutton({
         label: '0°',
         group: 'rotation',
         checked: true,
         oncheck: () => {
            this.camera.rotation = CameraRotation.DEG_0;
         }
      });
      rotationSubMenu.addRadiobutton({
         label: '90°',
         group: 'rotation',
         checked: false,
         oncheck: () => {
            this.camera.rotation = CameraRotation.DEG_90;
         }
      });
      rotationSubMenu.addRadiobutton({
         label: '180°',
         group: 'rotation',
         checked: false,
         oncheck: () => {
            this.camera.rotation = CameraRotation.DEG_180;
         }
      });
      rotationSubMenu.addRadiobutton({
         label: '270°',
         group: 'rotation',
         checked: false,
         oncheck: () => {
            this.camera.rotation = CameraRotation.DEG_270;
         }
      });


      this.advancedSubMenu = this.cameraMenu.addSubMenu('Advanced');

      this.enableCameraCtrls(false);

      const sessionMenu = menubar.addSubMenu('Session');

      sessionMenu.addItem('Exit', () => {
         this.closeConnection();
      });

      sessionMenu.addItem('Make me Host', () => {
         this.squint.requestToBeHost();
      });

      sessionMenu.addCheckbox({
         label: 'Logs',
         oncheck: (checkbox) => { this.console.visible = checkbox.checked },
         checked: () => { return this.console.visible; }
      });

      const soundMenu = optionsMenu.addSubMenu('Sounds');
      for (let soundStr in Sounds) {
         const sound: Sounds = Sounds[soundStr as keyof typeof Sounds];
         soundMenu.addRadiobutton({
            label: soundStr.replace('_', ' '),
            group: 'Sounds',
            checked: this.timerPanel.sound === sound,
            oncheck: () => {
               this.timerPanel.sound = sound;
               this.timerPanel.testSound();
            }
         });
      }




      this.remoteCameraMenu = menubar.addSubMenu('Remote Camera');
      this.remoteCameraMenu.hidden = true;
      const remoteJpegQuality = this.remoteCameraMenu.addSlider({
         label: 'JPeg Photo Quality',
         min: 0.1,
         max: 1,
         value: 0.5,
         onGetText: (slider) => (100 * slider.value).toFixed() + '%',
         oninput: () => {
            this.squint.sendCameraRequest(remoteMegaPixels.value, remoteJpegQuality.value);
         }
      });

      const remoteMegaPixels = this.remoteCameraMenu.addSlider({
         label: 'Camera Mega Pixels',
         min: this.megaPixels.min,
         max: this.megaPixels.max,
         value: this.megaPixels.value,
         onGetText: (slider) => slider.value.toFixed(2),
         oninput: () => {
            this.squint.sendCameraRequest(remoteMegaPixels.value, remoteJpegQuality.value);
         }
      });



      let transparentWhite = 'rgba(255,255,255,0.5)';
      let chatImg = menubar.addImage(baseUrl() + 'img/chat.svg',
         () => { this.chatPanel.visible = !this.chatPanel.visible; }
      );
      chatImg.style.backgroundColor = this.chatPanel.visible ? transparentWhite : 'transparent';
      this.chatPanel.onVisible = (visible) => {
         chatImg.style.backgroundColor = visible ? transparentWhite : 'transparent';
      }
      let levelsImg = menubar.addImage(baseUrl() + 'img/levels.svg',
         () => { this.levelsPanel.visible = !this.levelsPanel.visible; }
      );
      levelsImg.style.backgroundColor = this.levelsPanel.visible ? transparentWhite : 'transparent';
      this.levelsPanel.onVisible = (visible) => {
         levelsImg.style.backgroundColor = visible ? transparentWhite : 'transparent';
      }

      this.userNameMenuItemDiv = menubar.addItem(
         'Hi ' + (this.storage.has(StorageItem.UserName) ? this.storage.get(StorageItem.UserName) : ''),
         () => {
            new UserNameDialog(this.div, this.storage);
         });
      this.userNameMenuItemDiv.id = 'UserNameItemDiv';
   }

   private onDownload(blob: Blob) {

      if (!blob) {
         debug('onDownload() blob is null');
      }

      // let the server know we're ready for the next download
      this.squint.requestNextImage();
      this.drawBlob(blob);
   }

   private drawBlob(blob: Blob) {
      const img = document.createElement('img');

      img.src = URL.createObjectURL(blob);
      img.onload = () => {
         // TODO how do we know that this connection is the same as the one that
         // initiated the request?
         if (this.squint.connected) {
            this.img = img;
            this.downloadTracker.tick(blob.size);

            this.dirty = true;
         }

         URL.revokeObjectURL(img.src);
      }
      img.onerror = (reason) => {
         alert('Cannot load image: ' + reason);
      }
   }

   private buildAdvancedSubMenu(track: MediaStreamTrack) {
      this.advancedSubMenu.clear();

      this.advancedSubMenu.addItem('Camera Capabilities...', () => {
         const capabilities = this.camera.getCapabilities();
         let msg = 'Camera Capabilities:\n';
         for (const key in capabilities) {
            if (key === 'deviceId' || key === 'groupId') {
               continue;
            }
            msg += Camera.capabilityToString(capabilities, key) + '\n';
         }
         alert(msg);
      })



      this.advancedConstraints = [];

      // getCapabilities() not supported on Firefox
      if (track.getCapabilities) {
         const capabilities = track.getCapabilities() as IVideoTrackAdvancedCapabilities;
         const settings = track.getSettings() as IVideoTrackAdvancedSettings;

         const whiteBalanceMode: IConstraintItem = {
            constraint: 'whiteBalanceMode',
            label: 'Auto White Blance'
         }
         const colorTemperature: IConstraintItem = {
            constraint: 'colorTemperature',
            label: 'Temperature'
         }
         const exposureMode: IConstraintItem = {
            constraint: 'exposureMode',
            label: 'Auto Exposure'
         }
         const exposureCompensation: IConstraintItem = {
            constraint: 'exposureCompensation',
            label: 'F-Stop'
         }
         const exposureTime: IConstraintItem = {
            constraint: 'exposureTime',
            label: 'Exposure'
         }
         const iso: IConstraintItem = {
            constraint: 'iso',
            label: 'ISO'
         }
         const focusMode: IConstraintItem = {
            constraint: 'focusMode',
            label: 'Auto Focus'
         }
         const focusDistance: IConstraintItem = {
            constraint: 'focusDistance',
            label: 'Focus'
         }
         const zoom: IConstraintItem = {
            constraint: 'zoom',
            label: 'Zoom'
         }

         if (capabilities.whiteBalanceMode && capabilities.colorTemperature) {
            this.addAdvancedItems(
               settings,
               capabilities,
               whiteBalanceMode,
               [colorTemperature]
            );
         }

         if (
            capabilities.exposureMode &&
            (capabilities.exposureCompensation || capabilities.exposureTime || capabilities.iso)
         ) {
            this.addAdvancedItems(
               settings,
               capabilities,
               exposureMode,
               [exposureCompensation, exposureTime, iso]
            );
         }

         if (capabilities.focusMode && capabilities.focusDistance) {
            this.addAdvancedItems(
               settings,
               capabilities,
               focusMode,
               [focusDistance]
            );
         }

         if (capabilities.zoom) {
            this.addAdvancedSlider(settings, capabilities, zoom);
         }
      }
   }

   private addAdvancedItems(
      settings: IVideoTrackAdvancedSettings,
      capabilities: IVideoTrackAdvancedCapabilities,
      checkboxSetup: IConstraintItem,
      sliderSetups: IConstraintItem[]
   ) {

      const sliders: Slider[] = [];
      const checkbox = this.advancedSubMenu.addCheckbox({
         label: checkboxSetup.label,
         oncheck: (checkbox) => {
            for (const slider of sliders) {
               slider.enabled = !checkbox.checked;
            }
            this.camera.applyAdvancedConstraints(this.advancedConstraints);
         },
         checked: settings[checkboxSetup.constraint] === 'continuous',
      });

      this.advancedConstraints.push({
         constraint: checkboxSetup.constraint,
         value: () => { return checkbox.checked ? 'continuous' : 'manual'; }
      });

      for (const item of sliderSetups) {

         if (capabilities[item.constraint]) {
            const slider = this.addAdvancedSlider(settings, capabilities, item);
            slider.enabled = !checkbox.checked;

            sliders.push(slider);
         }
      }
   }

   private addAdvancedSlider(
      settings: IVideoTrackAdvancedSettings,
      capabilities: IVideoTrackAdvancedCapabilities,
      item: IConstraintItem,
   ): Slider {

      const range = capabilities[item.constraint] as IMediaSettingsRange;
      const slider = this.advancedSubMenu.addSlider({
         label: item.label,
         min: range.min,
         max: range.max,
         value: settings[item.constraint] as number,
         onGetText: (slider) => { return slider.value.toFixed(); },
         oninput: () => { this.camera.applyAdvancedConstraints(this.advancedConstraints); }
      })

      this.advancedConstraints.push({
         constraint: item.constraint,
         value: () => { return slider.value; }
      });
      return slider;
   }

   private enableVideo(enable: boolean) {

      // stop the last video
      this.camera.stop();

      this.enableCameraCtrls(enable);

      if (enable) {
         this.camera.visible = true;
         this.camera.start(this.desired)
            .then((track: MediaStreamTrack) => {
               const settings = track.getSettings();
               const maxMP = settings.width * settings.height / 1000000;
               this.megaPixels.max = maxMP;

               this.updateVideoSize(settings.width, settings.height);

               this.buildAdvancedSubMenu(track);
               this.updateVideoSize(this.camera.videoWidth, this.camera.videoHeight);

               // save the selected camera
               let obj: IPreferredCamera = {
                  deviceId: this.camera.deviceId,
               }
               this.storage.set(StorageItem.Camera, JSON.stringify(obj));

               if (!this.uploader) {
                  this.startSession();
               }
            })
            .catch((reason) => {
               alert(reason);
            });
      }
      else {
         this.stopUploader();
         this.camera.visible = false;
         this.advancedSubMenu.clear();
      }
   }

   private takePicture(): Promise<Blob> {

      if (!this.squint.connected) {
         console.error('takePicture() after close');
      }

      return this.camera.takePicture(this.megaPixels.value, this.jpegQuality.value)
         .then((blob: Blob) => {
            // draw what was uploaded, i.e. simulate a download
            this.drawBlob(blob);
            return blob;
         });
   }

   private updateVideoSize(videoWidth: number, videoHeight: number) {
      if (this.camera.visible) {
         const videoSize = Math.max(this.camera.clientWidth, this.camera.clientHeight);
         if (videoWidth > videoHeight) {
            this.camera.width = videoSize;
            this.camera.height = (videoSize * videoHeight / videoWidth);
         }
         else {
            this.camera.height = videoSize;
            this.camera.width = (videoSize * videoWidth / videoHeight);
         }
      }
   }

   private updateSizes() {
      this.dirty = true;
   }



   private drawImg() {

      requestAnimationFrame(() => this.drawImg());

      if (this.dirty === false) {
         return;
      }

      if (!this.img) {
         return;
      }

      this.canvas.draw(this.img);


      this.overlayCanvas.width = this.canvas.width;
      this.overlayCanvas.height = this.canvas.height;
      const ctx = this.overlayCanvas.getContext('2d');

      let msg: string;


      const canvasWidth = this.canvas.width;
      const canvasHeight = this.canvas.height;
      const canvasAR = canvasWidth / canvasHeight;

      const imgWidth = this.img.width;
      const imgHeight = this.img.height;
      const imgAR = imgWidth / imgHeight;

      let width: number;
      let height: number;

      if (canvasAR > imgAR) {
         height = this.canvas.zoom * canvasHeight;
         width = height * imgAR;
      }
      else {
         width = this.canvas.zoom * canvasWidth;
         height = width / imgAR;
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);


      const fontSize = isMobile ? 30 : 15;
      ctx.fillStyle = 'black';
      ctx.font = fontSize + 'px sans-serif';

      /*
      // squint server url
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillText(Squint.url, 5, 5);
      */


      // listeners
      ctx.textAlign = 'left';
      ctx.textBaseline = 'bottom';
      let lineHeight = fontSize + 5;

      let y = canvasHeight - 5;
      this.chatPanel.viewers.forEach((viewer: string) => {
         ctx.fillText(viewer, 5, y);
         y -= lineHeight;
      })
      ctx.fillText(this.chatPanel.viewers.length + ' viewer(s)', 5, y);

      // stats
      ctx.textAlign = 'right';
      ctx.textBaseline = 'bottom';


      // image size
      msg = imgWidth + 'x' + imgHeight;
      ctx.fillText(msg, canvasWidth - 5, canvasHeight - (4 * fontSize + 5));

      // image size
      const mp = (imgWidth * imgHeight / 1000000);
      if (mp < 1.5) {
         msg = mp.toFixed(2) + 'MP';
      }
      else {
         msg = mp.toFixed(1) + 'MP';
      }
      ctx.fillText(msg, canvasWidth - 5, canvasHeight - (3 * fontSize + 5));

      let fps: number;
      let bandwidth: number;
      if (this.uploader) {
         bandwidth = this.uploader.megaBitsPerSec;
         fps = this.uploader.fps;
      }
      else {
         bandwidth = this.downloadTracker.megaBitsPerSec;
         fps = this.downloadTracker.fps;
      }

      // FPS
      msg = fps.toFixed(1) + ' fps';
      ctx.fillText(msg, canvasWidth - 5, canvasHeight - (2 * fontSize + 5));

      // bandwidth
      if (bandwidth < 5) {
         msg = bandwidth.toFixed(2) + ' Mbsp';
      }
      else {
         msg = bandwidth.toFixed(1) + ' Mbsp';
      }
      ctx.fillText(msg, canvasWidth - 5, canvasHeight - (fontSize + 5));

      // bytes
      msg = toSizeStr(this.downloadTracker.lastTransferBytes);
      ctx.fillText(msg, canvasWidth - 5, canvasHeight - 5);

      // messages
      msg = '';
      if (this.squint.reconnecting) {
         msg = 'Reconnecting...';
      }
      if (this.squint.remoteCameraPaused || this.squint.remoteCameraConnected === false) {
         if (this.squint.remoteCameraConnected === false) {
            msg = 'Camera Disconnected';
         }
         else {
            msg = 'Camera Paused';
         }
      }

      if (msg.length > 0) {
         ctx.shadowBlur = 0;

         ctx.fillStyle = 'rgba(0,0,0,0.5)';
         ctx.fillRect(0, 0, canvasWidth, canvasHeight);

         let fontSize = 10;
         ctx.font = fontSize + 'px sans-serif';

         const textMetrics = ctx.measureText(msg);
         fontSize *= (0.8 * Math.min(width, canvasWidth) / textMetrics.width);
         ctx.font = fontSize + 'px sans-serif';

         ctx.fillStyle = 'rgba(255,255,255,0.5)';
         ctx.textAlign = 'center';
         ctx.textBaseline = 'middle';
         ctx.fillText(msg, canvasWidth / 2, canvasHeight / 2);
      }


      this.dirty = false;
   }

   private onScale(scale: number, change: number) {

      // TODO: center scaling about your two fingers

      this.canvas.zoom *= change;
      this.canvas.xOffset *= change;
      this.canvas.yOffset *= change;
      this.zoomPanel.zoom = this.canvas.zoom;

      this.dirty = true;
   }

   private onTranslate(delta: Vec2) {

      this.canvas.xOffset += delta.x;
      this.canvas.yOffset += delta.y;

      this.dirty = true;
   }

   private onDrag(pos: Vec2, delta: Vec2) {
      // TODO delta is opposite of translate in Y direction
      this.canvas.xOffset += delta.x;
      this.canvas.yOffset -= delta.y;

      this.dirty = true;
   }

   private onChatMessage(connection: IConnectionInfoBasic, msg: string) {
      this.showNotification('<b>' + connection.userName + '</b>: ' + msg);
   }

   private showNotification(html: string) {
      this.notificationDiv.innerHTML = html;

      // force the animation to run by removing and adding the element
      this.div.removeChild(this.notificationDiv);
      this.div.appendChild(this.notificationDiv);
   }
}
