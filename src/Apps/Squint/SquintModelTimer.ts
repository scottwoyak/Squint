import { CountdownTimer } from '../../Util/CountdownTimer';
import { ITimerInfo } from './ITimerInfo';
import { Squint } from './Squint';
import { debug } from './SquintApp';
import { SquintEvent } from './SquintEvents';

export enum TimeMs {
   Sec = 1000,
   Min = 60 * Sec,
   StdPose = 20 * Min,
   StdBreak = 7 * Min,
}

export type OnTickHandler = (info: ITimerInfo) => void;
export type OnAlarmHandler = (sound: boolean) => void;
export type OnAlarmTimeoutHandler = () => void;

export class SquintModelTimer {
   private squint: Squint;
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
         this.doStopAlarm(false);
      }

      this.tick();
      this.synchronizeToServer();
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

   public constructor(squint?: Squint) {
      this.squint = squint;
      this.countdownTimer.durationMs = TimeMs.StdPose;

      this.countdownTimer.onTick = () => {
         if (this.countdownTimer.expired && !this.alarmSounding) {
            this.startAlarm();
         }

         this.tick();
      }

      if (this.squint) {
         squint.on({
            event: SquintEvent.SynchronizeTimer,
            handler: (info: ITimerInfo) => {

               this.countdownTimer.synchronize(info.running, info.durationMs, info.remainingMs);

               if (info.alarmSounding !== this.alarmSounding) {
                  if (info.alarmSounding) {
                     this.startAlarm();
                  }
                  else {
                     this.doStopAlarm(false);
                  }
               }

               this.tick();
            }
         });

         squint.on({
            event: SquintEvent.Close,
            handler: () => {
               this.doReset(false);
            }
         });
      }
   }

   private synchronizeToServer(): void {
      if (this.squint) {
         this.squint.synchronizeTimer(this.info);
      }
   }

   public synchronizeFromServer(): void {
      if (this.squint) {
         this.squint.synchronizeTimer();
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

         this.synchronizeToServer();
      }
   }

   private doStop(sync: boolean) {
      if (this.countdownTimer.running) {
         this.countdownTimer.stop();

         this.tick();

         if (sync) {
            this.synchronizeToServer();
         }
      }
   }

   public stop(): void {
      this.doStop(true);
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

   private doReset(sync: boolean): void {
      if (this.alarmSounding) {
         this.doStopAlarm(false);
      }

      this.resetCountdownTimer();

      this.tick();

      if (sync) {
         this.synchronizeToServer();
      }
   }

   public reset(): void {
      this.doReset(true);
   }

   private startAlarm(): void {
      if (this.alarmSounding) {
         debug('Starting alarm but it is already sounding');
         return;
      }

      this.alarmTimeoutHandle = window.setTimeout(() => {
         // if we time out, we just stop playing the sound. We don't synchronize with the server
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

   private doStopAlarm(sync: boolean): void {
      if (this.alarmSounding) {
         window.clearTimeout(this.alarmTimeoutHandle);
         this.alarmTimeoutHandle = NaN;

         if (this.onAlarm) {
            this.onAlarm(false);
         }

         if (sync && this.squint.connected) {
            this.synchronizeToServer();
         }
      }
   }

   public stopAlarm(): void {
      this.doStopAlarm(true);
   }

   public addOne(): void {
      this.countdownTimer.addOne();
      this.synchronizeToServer();
   }

   public subtractOne(): void {
      if (this.countdownTimer.durationMs > 1 * TimeMs.Min) {
         this.countdownTimer.subtractOne();
         this.synchronizeToServer();
      }
   }
}