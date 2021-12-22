import { CountdownTimer } from '../../Util/CountdownTimer';
import { ITimerInfo } from './ITimerInfo';
import { debug } from './SquintApp';
import { TimeMs } from './TimeMs';

export type OnTickHandler = (info: ITimerInfo) => void;
export type OnAlarmHandler = (sound: boolean) => void;
export type OnTimeHandler = () => void;

export class ModelTimer {
   private countdownTimer = new CountdownTimer();

   private alarmTimeoutHandle = NaN;
   private alert10MinsSounded = false;
   private alert1MinSounded = false;

   // TODO get rid of this flag. It's a hack for calling reset() multiple times
   private hasBeenReset = true;
   private _soundAlerts = true;

   // values used to various time events. Pose and Break times are user settable. Change
   // the others to make testing faster
   public alert1MinuteRemainingMs = 1 * TimeMs.Min;
   public alert10MinutesRemainingMs = 10 * TimeMs.Min;
   public poseMs = TimeMs.StdPose;
   public breakMs = TimeMs.StdBreak;
   public alarmDurationMs = 7 * TimeMs.Sec;

   public onTick: OnTickHandler = null;
   public onAlarm: OnAlarmHandler = null;
   public onTimerStarted: OnTimeHandler = null;
   public onAlert10MinutesRemaining: OnTimeHandler = null;
   public onAlert1MinuteRemaining: OnTimeHandler = null;

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

   public get timeRemainingStr(): string {
      return this.countdownTimer.timeRemainingStr;
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

   public constructor() {
      this.countdownTimer.durationMs = this.poseMs;

      this.countdownTimer.onTick = () => {
         if (this.countdownTimer.expired && !this.alarmSounding) {
            this.startAlarm();
         }

         this.tick();
      }
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
   }

   /**
    * Starts the timer. If it is already running, it just stays running.
    * 
    * @param soundAlerts If specified, this value is used to override the default
    * alert behavior to force time remaining alerts on or off
    */
   public start(soundAlerts?: boolean): void {
      if (this.countdownTimer.running === false) {
         this.alert10MinsSounded = false;
         this.alert1MinSounded = false;
         this.hasBeenReset = false;

         if (soundAlerts === undefined) {
            // only play time remaining alerts if the time was greater than 10 minutes
            this._soundAlerts = (this.durationMs > 10 * TimeMs.Min);
         }
         else {
            // use the user supplied value
            this._soundAlerts = soundAlerts;
         }

         this.countdownTimer.start();

         if (this.countdownTimer.expired && !this.alarmSounding) {
            this.startAlarm();
         }
      }
   }

   public stop(): void {
      if (this.countdownTimer.running) {
         this.countdownTimer.stop();

         this.tick();
      }
   }

   private resetCountdownTimer() {
      if (this.hasBeenReset === false) {
         this.hasBeenReset = true;
         this.countdownTimer.reset();
         if (this.countdownTimer.durationMs === this.breakMs) {
            // prepare for next pose;
            this.countdownTimer.durationMs = this.poseMs;
         }
         else {
            // prepare for the break
            this.countdownTimer.durationMs = this.breakMs;
         }
      }
   }

   public reset(): void {
      if (this.alarmSounding) {
         this.stopAlarm();
      }

      this.resetCountdownTimer();

      this.tick();
   }

   private startAlarm(): void {
      if (this.alarmSounding) {
         debug('Starting alarm but it is already sounding');
         return;
      }

      this.alarmTimeoutHandle = window.setTimeout(() => {
         this.resetCountdownTimer();
         this.alarmTimeoutHandle = NaN;
         if (this.onAlarm) {
            this.onAlarm(false);
         }

      }, this.alarmDurationMs);

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
   }

   public subtractOne(): void {
      if (this.countdownTimer.durationMs > 1 * TimeMs.Min) {
         this.countdownTimer.subtractOne();
      }
   }
}