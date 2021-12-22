import { CountdownTimer } from '../../Util/CountdownTimer';
import { ITimerInfo } from './ITimerInfo';
import { debug } from './SquintApp';
import { TimeMs } from './TimeMs';

export type OnTickHandler = (info: ITimerInfo) => void;
export type OnAlarmHandler = (sound: boolean) => void;
export type OnAlarmTimeoutHandler = () => void;

export class ModelTimer {
   private countdownTimer = new CountdownTimer();

   public alarmDurationMs = 10 * TimeMs.Sec;

   private alarmTimeoutHandle = NaN;

   public onTick: OnTickHandler = null;
   public onAlarm: OnAlarmHandler = null;
   public onAlarmTimeout: OnAlarmTimeoutHandler = null;

   // TODO get rid of this flag. It's a hack for calling reset() multiple times
   private hasBeenReset = true;


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
      this.countdownTimer.durationMs = TimeMs.StdPose;

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
   }

   public start(): void {
      this.hasBeenReset = false;
      if (this.countdownTimer.running === false) {
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
         if (this.countdownTimer.durationMs === TimeMs.StdBreak) {
            // prepare for next pose;
            this.countdownTimer.durationMs = TimeMs.StdPose;
         }
         else {
            // prepare for the break
            this.countdownTimer.durationMs = TimeMs.StdBreak;
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

         if (this.onAlarmTimeout) {
            this.onAlarmTimeout();
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