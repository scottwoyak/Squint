import screenfull from 'screenfull';
import { GUI } from '../../GUI/GUI';
import { PointerEventHandler } from '../../GUI/PointerEventHandler';
import { baseUrl, getEmPixels, getTimeStr, isMobile } from '../../Util/Globals';
import { Vec2 } from '../../Util3D/Vec';
import { ITimerInfo } from './ITimerInfo';
import { ModelTimer } from './ModelTimer';
import { Rect } from './Rect';
import { Sounds } from './Sounds';
import { StorageItem, StorageWithEvents } from './StorageWithEvents';
import { TimeMs } from './TimeMs';

enum HitArea {
   TimerText,
   StartStop,
   AutoStartCancel,
   None,
}

export class ModelTimerPanel {
   private modelTimer: ModelTimer;
   private canvas: HTMLCanvasElement;
   private alarm: HTMLAudioElement = null;
   private alertTimerStarted: HTMLAudioElement = null;
   private alert10MinsRemaining: HTMLAudioElement = null;
   private alert1MinRemaining: HTMLAudioElement = null;
   private alertChangePlease: HTMLAudioElement = null;
   private timerTextBox: Rect;
   private cancelBox: Rect;
   private storage = new StorageWithEvents
   private soundFile: string = Sounds.Chime;

   public goFullScreenOnStart = false;
   public announceTimeRemaining = true;

   private readonly leftMarginRatio = 0.25;
   private get leftMarginWidth(): number {
      return this.timerTextBox.height * this.leftMarginRatio;
   }

   private readonly startStopWidthRatio = 1.0;
   private get startStopWidth(): number {
      return this.timerTextBox.height * this.startStopWidthRatio;
   }

   public get info(): ITimerInfo {
      return this.modelTimer.info;
   }

   public get width(): number {
      return this.canvas.width;
   }
   public set width(width: number) {
      this.canvas.style.width = width + 'px'
      this.canvas.width = width;
      this.draw();
   }

   public get height(): number {
      return this.canvas.height;
   }
   public set height(height: number) {
      this.canvas.style.height = height + 'px'
      this.canvas.height = height;
      this.draw();
   }

   public set sound(sound: string) {
      this.soundFile = sound;
      this.storage.set(StorageItem.Sound, sound);
      if (this.alarm) {
         this.alarm.src = baseUrl() + sound;
      }
   }

   public get sound(): string {
      return this.soundFile;
   }

   public set poseLengthsM(poses: number[]) {
      this.modelTimer.poseLengthsM = poses
      this.draw();
   }

   public set poseMs(value: number) {
      this.modelTimer.poseMs = value;
      this.draw();
   }

   public set breakMs(value: number) {
      this.modelTimer.breakMs = value;
      this.draw();
   }

   public constructor(modelTimer: ModelTimer, parent: HTMLElement) {

      this.modelTimer = modelTimer;

      this.modelTimer.onAlarm = (sound: boolean) => {
         if (sound) {
            this.startSound();
            this.modelTimer.next();
         }
         else {
            this.stopSound();
         }

         this.draw();
      }

      this.modelTimer.onTimerStarted = () => {
         this.playSound(this.alertTimerStarted, false);
      }

      this.modelTimer.onAlert1MinuteRemaining = () => {
         if (this.announceTimeRemaining) {
            this.playSound(this.alert1MinRemaining, false);
         }
      }

      this.modelTimer.onAlert10MinutesRemaining = () => {
         if (this.announceTimeRemaining) {
            this.playSound(this.alert10MinsRemaining, false);
         }
      }

      this.modelTimer.onChangePose = () => {
         this.playSound(this.alertChangePlease, false);
      }

      this.modelTimer.onTick = () => {
         this.draw();
      }

      this.canvas = GUI.create('canvas', 'ModelTimerCanvas', parent);

      let handler = new PointerEventHandler(this.canvas);

      handler.onMove = (pos: Vec2, delta: Vec2) => {
         switch (this.hitTest(pos)) {
            case HitArea.TimerText:
               if (modelTimer.running === false) {
                  this.canvas.style.cursor = 'ns-resize';
               }
               else {
                  this.canvas.style.cursor = 'default';
               }
               break;

            case HitArea.StartStop:
            case HitArea.AutoStartCancel:
               this.canvas.style.cursor = 'pointer';
               break;

            default:
               this.canvas.style.cursor = 'default';
               break;
         }

         if (modelTimer.alarmSounding) {
            this.stopAlarm();
         }
      }

      let dragging = false;
      handler.onUp = (pos: Vec2) => {
         document.body.style.cursor = 'default';

         dragging = false;
      }

      let starting = false;
      handler.onDown = (pos: Vec2) => {

         this.initAudio();

         if (this.modelTimer.alarmSounding) {
            this.stopAlarm();
         }

         switch (this.hitTest(pos)) {
            case HitArea.StartStop:
               {
                  if (this.modelTimer.running) {
                     this.modelTimer.pause();
                     starting = false;
                  }
                  else {
                     this.modelTimer.start();
                     starting = true;
                  }
               }
               dragging = false;
               break;

            case HitArea.AutoStartCancel:
               this.modelTimer.resetAutoStartTimer();
               dragging = false;
               break;

            default:
               // don't adjust the time if the timer is running. Force the user
               // to stop the timer first
               if (modelTimer.running === false) {
                  dragging = true;
               }
               break;
         }

         // add a periodic draw event so update the clock when the timer isn't running
         setInterval(() => {
            if (this.modelTimer.running === false) {
               this.draw();
            }
         },
            10 * TimeMs.Sec);

         // do the first draw
         this.draw();
      }

      handler.onUp = (pos: Vec2) => {
         if (starting) {
            if (this.goFullScreenOnStart) {
               // go fullscreen
               if (screenfull.isEnabled) {
                  screenfull.request()
                     .catch((err) => { console.log('Cannot go fullscreen: ' + err) });
               }
            }
         }
      }

      let accumulatedDelta = 0;
      let step = getEmPixels() / 2;

      if (isMobile) {
         step *= 2;
      }

      handler.onDrag = (pos: Vec2, delta: Vec2) => {
         if (dragging === true) {
            document.body.style.cursor = 'ns-resize';
            accumulatedDelta -= delta.y;
            while (accumulatedDelta > step) {
               this.modelTimer.addOne();
               accumulatedDelta -= step;
            }
            while (accumulatedDelta < -step) {
               this.modelTimer.subtractOne();
               accumulatedDelta += step;
            }

            this.draw();
         }
      }

      // for the mouse wheel
      handler.onScale = (scale: number, change: number) => {
         if (change < 1) {
            this.modelTimer.addOne();
         }
         else {
            this.modelTimer.subtractOne();
         }

         this.draw();
      }

      // TODO: can these be removed? Double check if there needed for Squint or on Safari
      document.body.addEventListener('mousedown', () => {
         this.stopAlarm();
         this.initAudio();
      });
      document.body.addEventListener('touchstart', () => {
         this.stopAlarm();
         this.initAudio();
      });

      if (this.storage.has(StorageItem.Sound)) {
         this.sound = this.storage.get(StorageItem.Sound);
      }

      this.draw();
   }

   public testSound(): void {
      this.playSound(this.alarm, false);
   }

   private playSound(sound: HTMLAudioElement, loop: boolean): void {
      sound.currentTime = 0;
      sound.loop = loop;
      sound.play().catch((err) => { console.log('Cannot play sound: ' + err) });
   }

   private hitTest(pos: Vec2): HitArea {

      if (this.cancelBox && this.cancelBox.inside(pos)) {
         return HitArea.AutoStartCancel;
      }

      if (pos.x < this.timerTextBox.left || pos.x > this.timerTextBox.right || pos.y < this.timerTextBox.top || pos.y > this.timerTextBox.bottom) {
         return HitArea.None;
      }

      if (pos.x < this.timerTextBox.right - this.startStopWidth) {
         return HitArea.TimerText;
      }
      else {
         return HitArea.StartStop;
      }
   }

   private initAudio(): void {
      // create via html instead of new Audio() which is blocked on portable ios
      if (this.alarm === null) {
         this.alarm = GUI.create('audio', 'AlarmAudio', document.body);
         this.alarm.src = baseUrl() + this.soundFile;
      }

      if (this.alertTimerStarted === null) {
         this.alertTimerStarted = GUI.create('audio', 'AlertTimerStarted', document.body);
         this.alertTimerStarted.src = baseUrl() + 'sounds/timer_started.mp3';
      }

      if (this.alert10MinsRemaining === null) {
         this.alert10MinsRemaining = GUI.create('audio', 'Alert10MinsRemaining', document.body);
         this.alert10MinsRemaining.src = baseUrl() + 'sounds/10_minutes_remaining.mp3';
      }

      if (this.alert1MinRemaining === null) {
         this.alert1MinRemaining = GUI.create('audio', 'Alert1MinRemaining', document.body);
         this.alert1MinRemaining.src = baseUrl() + 'sounds/1_minute_remaining.mp3';
      }

      if (this.alertChangePlease === null) {
         this.alertChangePlease = GUI.create('audio', 'AlertChangePlease', document.body);
         this.alertChangePlease.src = baseUrl() + 'sounds/change_please.mp3';
      }
   }

   private getOptimalSize(): Rect {
      let width = this.canvas.width;
      let height = this.canvas.height;

      let em = getEmPixels();
      let fontSize = (height - 0.5 * em);

      let ctx = this.canvas.getContext('2d');
      ctx.font = fontSize + 'px Arial';
      let size = ctx.measureText('00:00');

      let desiredHeight = height;
      let desiredWidth = size.width + (this.leftMarginRatio + this.startStopWidthRatio) * height;
      let AR = desiredWidth / desiredHeight;

      if (desiredWidth > width) {
         desiredWidth = width;
         desiredHeight = desiredWidth / AR;
      }

      let x = (width - desiredWidth) / 2;
      let y = (height - desiredHeight) / 2;
      return new Rect(x, y, desiredWidth, desiredHeight);
   }

   private startSound() {
      if (this.alarm) {
         this.playSound(this.alarm, true);
      }
   }

   private stopSound() {
      this.alarm.pause();
      this.alarm.currentTime = 0;
   }

   private stopAlarm() {
      if (this.modelTimer.alarmSounding) {
         this.modelTimer.reset();
         this.modelTimer.startAutoStartTimer();
      }
   }

   public draw(): void {

      let style = getComputedStyle(this.canvas);

      let width = this.canvas.clientWidth;
      let height = this.canvas.clientHeight;
      this.canvas.width = width;
      this.canvas.height = height;
      this.timerTextBox = this.getOptimalSize();

      let x = this.timerTextBox.x;
      let y = this.timerTextBox.y;

      let ctx = this.canvas.getContext('2d');
      ctx.fillStyle = this.modelTimer.alarmSounding ? 'orange' : style.backgroundColor ?? 'lightgray';
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      // draw the time text
      let em = getEmPixels();
      let fontSize = (this.timerTextBox.height - 0.5 * em);
      ctx.font = fontSize + 'px Arial';
      ctx.fillStyle = this.modelTimer.alarmSounding ? 'rgba(255, 255, 255, 0.8)' : style.color ?? 'black';
      let size = ctx.measureText('00:00');

      x += this.leftMarginWidth;
      this.drawText(ctx, this.modelTimer.remainingStr, x, y, size.width, this.timerTextBox.height);
      x += size.width;

      // draw the start/stop symbols
      let boxSize = this.timerTextBox.height;
      ctx.beginPath();
      if (this.modelTimer.alarmSounding || this.modelTimer.running) {
         // red square
         let size = 0.25;
         ctx.fillStyle = 'rgba(255,128,128,0.3)';
         ctx.strokeStyle = 'rgba(255,0,0,0.8)';
         ctx.moveTo(x + size * boxSize, y + size * boxSize);
         ctx.lineTo(x + (1 - size) * boxSize, y + size * boxSize);
         ctx.lineTo(x + (1 - size) * boxSize, y + (1 - size) * boxSize);
         ctx.lineTo(x + size * boxSize, y + (1 - size) * boxSize);
         ctx.lineTo(x + size * boxSize, y + size * boxSize);
      }
      else {
         // green triangle
         ctx.fillStyle = 'rgba(128,255,128,0.4)';
         ctx.strokeStyle = 'rgba(0,200,0,0.9)';
         ctx.moveTo(x + 0.2 * boxSize, y + 0.2 * boxSize);
         ctx.lineTo(x + 0.8 * boxSize, y + 0.5 * boxSize);
         ctx.lineTo(x + 0.2 * boxSize, y + 0.8 * boxSize);
         ctx.lineTo(x + 0.2 * boxSize, y + 0.2 * boxSize);
      }
      //ctx.strokeStyle = 'black';
      ctx.fill();
      ctx.stroke();

      // if there is extra room above and below the text, draw more stuff
      if (height > fontSize + 6 * em) {
         // display the current time
         ctx.font = '2em Arial';
         ctx.fillStyle = this.modelTimer.alarmSounding ? 'rgba(255,255,255, 0.8)' : 'rgba(255,255,255,0.5)';
         ctx.textAlign = 'center';
         ctx.textBaseline = 'top';
         ctx.fillText(getTimeStr(), width / 2, 1 * em);

         // display content for autostart
         if (this.modelTimer.autoStartTimerRunning) {

            ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.fillRect(0, height - 4 * em, width, 4 * em);

            ctx.fillStyle = 'gray';
            ctx.textBaseline = 'bottom';
            ctx.textAlign = 'left';
            ctx.fillText('Auto-start in ' + this.modelTimer.autoStartTimerRemainingStr, 1 * em, height - 1 * em);

            ctx.textAlign = 'right';
            ctx.fillText('Cancel', width - 1 * em, height - 1 * em);
            let size = ctx.measureText('Cancel');
            this.cancelBox = new Rect(width - (size.width + 2 * em), height - 4 * em, size.width + 2 * em, 4 * em);
         }
         else {
            this.cancelBox = null;

            let pX = em;
            let pH = 2.0 * em;
            let pY = height - pH - 1 * em;
            let pW = width - 2 * em;

            // draw the progress meter background
            ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.fillRect(pX, pY, pW, pH);

            // draw the progress
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            let percent = this.modelTimer.elapsedMs / this.modelTimer.durationMs;
            ctx.fillRect(pX, pY, percent * pW, pH);

            // draw lines for each break
            ctx.strokeStyle = style.backgroundColor ?? 'lightgray';
            ctx.lineWidth = 2.0;

            // only draw lines if the pose duration is long enough. This code
            // needs to be synchronized with the code in the model timer class
            // for sending the event
            if (this.modelTimer.durationMs > 10 * TimeMs.Min) {
               let time = 0;
               for (let i = 0; i < this.modelTimer.poseLengthsM.length; i++) {
                  time += this.modelTimer.poseLengthsM[i] * TimeMs.Min;
                  let x = pX + (time / this.modelTimer.durationMs) * pW;

                  ctx.beginPath();
                  ctx.moveTo(x, pY);
                  ctx.lineTo(x, pY + pH);
                  ctx.stroke();
               }
            }
         }
      }
   }

   private drawText(ctx: CanvasRenderingContext2D, str: string, x: number, y: number, width: number, height: number) {

      let size = ctx.measureText('y'); // something with a descent

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(str, x + width / 2, y + height / 2 + 0.5 * size.actualBoundingBoxDescent / 2);

   }
}

