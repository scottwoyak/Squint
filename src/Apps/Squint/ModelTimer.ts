import { CountdownTimer } from '../../Util/CountdownTimer';
import { ITimerInfo } from './ITimerInfo';
import { debug } from './SquintApp';
import { TimeMs } from './TimeMs';

export type OnTickHandler = (info: ITimerInfo) => void;
export type OnAlarmHandler = (sound: boolean) => void;
export type OnTimeHandler = () => void;

export class ModelTimer {
   private countdownTimer = new CountdownTimer();
   private autoStartTimer = new CountdownTimer(30 * TimeMs.Sec);

   private alarmTimeoutHandle = NaN;
   private alert10MinsSounded = false;
   private alert1MinSounded = false;
   private _poseMs = TimeMs.StdPose;
   private _breakMs = TimeMs.StdBreak;

   // flag used to indicate if the "X Minutes Remaining" alerts are fired
   private _soundAlerts = true;

   private _poseLengthsM = [] as number[];
   private changePoseTimesMs = [] as number[];

   public set poseMs(value: number) {
      if (this.countdownTimer.durationMs === this._poseMs) {
         this.countdownTimer.durationMs = value;
      }
      this._poseMs = value;
   }

   public set breakMs(value: number) {
      if (this.countdownTimer.durationMs === this._breakMs) {
         this.countdownTimer.durationMs = value;
      }
      this._breakMs = value;
   }

   public alarmDurationMs = 7 * TimeMs.Sec;

   // only change these values to speed up testing
   public alert1MinuteRemainingMs = 1 * TimeMs.Min;
   public alert10MinutesRemainingMs = 10 * TimeMs.Min;
   public get autoStartTimerDurationMs(): number {
      return this.autoStartTimer.durationMs;
   }
   public set autoStartTimerDurationMs(ms: number) {
      this.autoStartTimer.durationMs = ms;
   }

   public onTick: OnTickHandler = null;
   public onAlarm: OnAlarmHandler = null;
   public onTimerStarted: OnTimeHandler = null;
   public onAlert10MinutesRemaining: OnTimeHandler = null;
   public onAlert1MinuteRemaining: OnTimeHandler = null;
   public onChangePose: OnTimeHandler = null;

   public resetAutoStartTimer(): void {
      this.autoStartTimer.reset();
   }

   public startAutoStartTimer(): void {
      this.autoStartTimer.start();
   }

   public get autoStartTimerRunning(): boolean {
      return this.autoStartTimer.running;
   }

   public get autoStartTimerRemainingStr(): string {
      return this.autoStartTimer.remainingStr;
   }

   public get autoStartTimerRemainingMs(): number {
      return this.autoStartTimer.remainingMs;
   }

   public get soundAlerts(): boolean {
      return this._soundAlerts;
   }

   public get running(): boolean {
      return this.countdownTimer.running;
   }

   public get durationMs(): number {
      return this.countdownTimer.durationMs;
   }

   public set durationMs(value: number) {
      this.countdownTimer.durationMs = value;

      if (this.alarmSounding) {
         this.stopAlarm();
      }

      this.tick();
   }

   public get remainingMs(): number {
      return this.countdownTimer.remainingMs;
   }

   public get remainingStr(): string {
      return this.countdownTimer.remainingStr;
   }

   public get elapsedMs(): number {
      return this.countdownTimer.elapsedMs;
   }

   public get alarmSounding(): boolean {
      return !isNaN(this.alarmTimeoutHandle);
   }

   public get info(): ITimerInfo {
      return {
         running: this.countdownTimer.running,
         durationMs: this.countdownTimer.durationMs,
         remainingMs: this.countdownTimer.remainingMs,
         alarmSounding: this.alarmSounding,
      }
   }

   private updateChangePoseTimes() {
      this.changePoseTimesMs = [];
      let value = 0;
      for (let i = 0; i < this.poseLengthsM.length; i++) {
         value += this.poseLengthsM[i] * TimeMs.Min;
         if (value > this.elapsedMs) {
            console.error('pushing ' + value);
            this.changePoseTimesMs.push(value);
         }
      }
   }

   public set poseLengthsM(poses: number[]) {
      this._poseLengthsM = poses;
      this.updateChangePoseTimes();
   }
   public get poseLengthsM(): number[] {
      return this._poseLengthsM;
   }

   public constructor() {
      this.countdownTimer.durationMs = this._poseMs;

      this.countdownTimer.onTick = () => {
         if (this.countdownTimer.expired && !this.alarmSounding) {
            this.startAlarm();
         }

         this.tick();
      }

      this.autoStartTimer.onTick = () => {
         if (this.autoStartTimer.expired) {
            this.reset();
            this.start();
         }

         this.tick();
      };
   }

   private tick(): void {
      if (this.onTick) {
         this.onTick(this.info);
      }

      if (this.soundAlerts) {
         if (this.remainingMs <= this.alert10MinutesRemainingMs && this.alert10MinsSounded === false) {
            this.alert10MinsSounded = true;
            if (this.onAlert10MinutesRemaining) {
               this.onAlert10MinutesRemaining();
            }
         }
         if (this.remainingMs <= this.alert1MinuteRemainingMs && this.alert1MinSounded === false) {
            this.alert1MinSounded = true;
            if (this.onAlert1MinuteRemaining) {
               this.onAlert1MinuteRemaining();
            }
         }
      }

      // only send out the change events if it a pose, not a break
      if (this.countdownTimer.durationMs > 10 * TimeMs.Min) {
         if (this.countdownTimer.expired === false && this.changePoseTimesMs.length > 0) {
            if (this.elapsedMs >= this.changePoseTimesMs[0]) {
               this.changePoseTimesMs.shift();

               if (this.onChangePose) {
                  this.onChangePose();
               }
            }
         }
      }
   }

   /**
    * Starts the timer. If it is already running, it just stays running.
    * 
    * @param soundAlerts If specified, this value is used to override the default
    * alert behavior to force time remaining alerts on or off
    */
   public start(soundAlerts?: boolean): void {
      if (this.countdownTimer.running === false) {

         this.autoStartTimer.reset();

         this.alert10MinsSounded = false;
         this.alert1MinSounded = false;

         if (soundAlerts === undefined) {
            if (this.poseLengthsM.length > 0) {
               // if there are change alerts, don't sound the time remaining alerts
               this._soundAlerts = false;
            }
            else {
               // only play time remaining alerts if the time was greater than 10 minutes
               this._soundAlerts = (this.durationMs > 10 * TimeMs.Min);
            }
         }
         else {
            // use the user supplied value
            this._soundAlerts = soundAlerts;
         }

         this.countdownTimer.start();

         if (this.onTimerStarted) {
            this.onTimerStarted();
         }

         // special case of the timer set to zero
         if (this.countdownTimer.expired && !this.alarmSounding) {
            this.startAlarm();
         }
      }
   }

   public pause(): void {
      if (this.countdownTimer.running) {
         this.countdownTimer.stop();
         this.tick();
      }
   }

   /**
    * Preps the timer for the next session - break or pose. If
    * the alarm is sounding it will continue to sound. The duration
    * value will be updated to the next appropriate value
    */
   public next() {
      if (this, this.running) {
         debug('Calling next() while running');
         return;
      }

      // clear elapsed time
      this.countdownTimer.reset();

      // change the duration value
      if (this.countdownTimer.durationMs === this._breakMs) {
         // prepare for next pose;
         this.countdownTimer.durationMs = this._poseMs;
      }
      else {
         // prepare for the break
         this.countdownTimer.durationMs = this._breakMs;
      }
   }

   /**
    * Resets the timer to the initial state. 
    * 
    * 1. If an alarm is sounding, a stop event is fired.
    * 2. If the auto start timer is running, it is reset
    */
   public reset(): void {
      if (this.alarmSounding) {
         this.stopAlarm();
      }

      this.countdownTimer.reset();
      this.resetAutoStartTimer();
      this.updateChangePoseTimes();

      this.tick();
   }

   private startAlarm(): void {
      if (this.alarmSounding) {
         debug('Starting alarm but it is already sounding');
         return;
      }

      // create a timer to stop the alarm
      this.alarmTimeoutHandle = window.setTimeout(() => {
         this.countdownTimer.reset();
         this.alarmTimeoutHandle = NaN;
         if (this.onAlarm) {
            this.onAlarm(false);
         }

      }, this.alarmDurationMs);

      // start the auto start timer
      this.autoStartTimer.reset();
      this.autoStartTimer.start();

      // do this after setting a value for alarmTimeoutHandle so that alarmSounding = true
      if (this.onAlarm) {
         this.onAlarm(true);
      }
   }

   public stopAlarm(): void {
      if (this.alarmSounding) {
         window.clearTimeout(this.alarmTimeoutHandle);
         this.alarmTimeoutHandle = NaN;

         if (this.onAlarm) {
            this.onAlarm(false);
         }
      }
   }

   public addOne(): void {
      this.countdownTimer.addOne();
      this.resetAutoStartTimer();
   }

   public subtractOne(): void {
      if (this.countdownTimer.durationMs > 1 * TimeMs.Min) {
         this.countdownTimer.subtractOne();
      }
      this.resetAutoStartTimer();
   }
}