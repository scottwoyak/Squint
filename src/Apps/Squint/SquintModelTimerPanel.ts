import screenfull from 'screenfull';
import { GUI } from '../../GUI/GUI';
import { PointerEventHandler } from '../../GUI/PointerEventHandler';
import { CountdownTimer } from '../../Util/CountdownTimer';
import { baseUrl, getEmPixels, getTimeStr, isMobile } from '../../Util/Globals';
import { Vec2 } from '../../Util3D/Vec';
import { ITimerInfo } from './ITimerInfo';
import { SquintModelTimer } from './SquintModelTimer';
import { Rect } from './Rect';
import { Sounds } from './Sounds';
import { StorageItem, StorageWithEvents } from './StorageWithEvents';

enum HitArea {
   TimerText,
   StartStop,
   None,
}

export class SquintModelTimerPanel {
   private modelTimer: SquintModelTimer;
   private canvas: HTMLCanvasElement;
   private alarm: HTMLAudioElement = null;
   private alertTimerStarted: HTMLAudioElement = null;
   private alert10MinsRemaining: HTMLAudioElement = null;
   private alert1MinRemaining: HTMLAudioElement = null;
   private timerTextBox: Rect;
   private cancelBox: Rect;
   private storage = new StorageWithEvents
   private soundFile: string = Sounds.Chime;
   private alert10MinsSounded = false;
   private alert1MinSounded = false;

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

   public constructor(modelTimer: SquintModelTimer, parent: HTMLElement) {

      this.modelTimer = modelTimer;

      this.modelTimer.onAlarm = (sound: boolean) => {
         if (sound) {
            this.startSound();

            this.draw();
         }
         else {
            this.stopSound();
            this.draw();
         }
      }

      this.modelTimer.onTick = () => {
         this.draw();

         // don't play alerts for breaks
         if (this.modelTimer.durationMs >= 11 * 60 * 1000) {
            if (this.modelTimer.remainingMs <= 10 * 60 * 1000 && this.alert10MinsSounded === false) {
               this.alert10MinsSounded = true;
               this.playSound(this.alert10MinsRemaining, false);
            }
            if (this.modelTimer.remainingMs <= 1 * 60 * 1000 && this.alert1MinSounded === false) {
               this.alert1MinSounded = true;
               this.playSound(this.alert1MinRemaining, false);
            }
         }
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
         else {
            switch (this.hitTest(pos)) {
               case HitArea.StartStop:
                  {
                     if (this.modelTimer.running) {
                        this.modelTimer.stop();
                        starting = false;
                     }
                     else {
                        this.modelTimer.start();
                        this.alert10MinsSounded = false;
                        this.alert1MinSounded = false;
                        this.playSound(this.alertTimerStarted, false);
                        starting = true;
                     }
                  }
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
         }
         this.draw();
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
      this.drawText(ctx, this.modelTimer.timeRemainingStr, x, y, size.width, this.timerTextBox.height);
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

      // if there is room above the text, draw the current time
      if (height > fontSize + 6 * em) {
         // display the current time
         ctx.font = '2em Arial';
         ctx.fillStyle = this.modelTimer.alarmSounding ? 'rgba(255,255,255, 0.8)' : 'rgba(255,255,255,0.5)';
         ctx.textAlign = 'center';
         ctx.textBaseline = 'top';
         ctx.fillText(getTimeStr(), width / 2, 1 * em);
      }
   }

   private drawText(ctx: CanvasRenderingContext2D, str: string, x: number, y: number, width: number, height: number) {

      let size = ctx.measureText('y'); // something with a descent

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(str, x + width / 2, y + height / 2 + 0.5 * size.actualBoundingBoxDescent / 2);

   }

   private onCountdownTick() {
      this.draw();
   }
}