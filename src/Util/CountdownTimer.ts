import { TimeMs } from '../Apps/Squint/TimeMs';
import { Stopwatch } from './Stopwatch';

const SEC = 1000;
const MIN = 60 * SEC;

export type OnTickHandler = (timer: CountdownTimer) => void;

export class CountdownTimer {
   private sw = new Stopwatch(false);
   private _durationMs: number;
   private tickTimeoutHandle = NaN;

   public onTick: OnTickHandler = null;

   public get durationMs(): number {
      return this._durationMs;
   }

   public set durationMs(value: number) {
      this.stop();
      this._durationMs = value;
   }

   public get running(): boolean {
      if (this.sw.elapsedMs > this._durationMs) {
         this.sw.stop();
         this.sw.elapsedMs = this._durationMs;
      }

      return this.sw.running;
   }

   public get durationMin(): number {
      return this.durationMs / MIN;
   }

   public get remainingMs(): number {
      return Math.max(0, this.durationMs - this.sw.elapsedMs);
   }

   public get elapsedMs(): number {
      return this.sw.elapsedMs;
   }

   public get remainingStr(): string {
      let remaining = this.remainingMs;
      let min = Math.floor(remaining / MIN);
      let sec = Math.floor((remaining - min * MIN) / SEC);
      let minStr = min < 10 ? '0' + min : min;
      let secStr = sec < 10 ? '0' + sec : sec;
      return minStr + ':' + secStr;
   }

   public get expired(): boolean {
      return (this.sw.elapsedMs >= this.durationMs);
   }

   public constructor(durationMs = TimeMs.StdPose) {
      this._durationMs = durationMs;
   }

   public start(): void {
      if (this.sw.running === false && this.expired === false) {
         this.sw.start();
         this.tick();
      }
   }

   public stop(): void {
      this.sw.stop();

      if (isNaN(this.tickTimeoutHandle) === false) {
         window.clearTimeout(this.tickTimeoutHandle);
         this.tickTimeoutHandle = NaN;
      }


      if (this.sw.elapsedMs > this._durationMs) {
         this.sw.elapsedMs = this._durationMs;
      }
   }

   public reset(): void {
      this.sw.reset(false);
   }

   public addOne(): void {
      this.stop();

      this._durationMs = this.remainingMs;
      this.sw.elapsedMs = 0;

      // the next highest minute value
      this._durationMs = MIN * Math.floor(this.durationMin) + MIN;
   }

   public subtractOne(): void {
      this.stop();

      this._durationMs = this.remainingMs;
      this.sw.elapsedMs = 0;

      // the next lowest minute value
      this._durationMs = MIN * Math.floor(0.9999 + this.durationMin) - MIN;
      this._durationMs = Math.max(this._durationMs, 0);
   }

   public synchronize(running: boolean, durationMs: number, remainingMs: number): void {
      durationMs = Math.max(0, durationMs);
      remainingMs = Math.min(remainingMs, durationMs);
      remainingMs = Math.max(0, remainingMs);

      this.sw.reset(false);
      this.sw.elapsedMs = durationMs - remainingMs;
      this._durationMs = durationMs;

      if (durationMs >= 0 && remainingMs >= 0 && durationMs > remainingMs && running) {
         this.sw.start();
         this.tick();
      }
   }

   private tick(): void {
      if (this.onTick) {
         this.onTick(this);
      }

      // if the timer is running request the next timeout
      if (this.running) {
         this.registerNextTick();
      }
   }

   private registerNextTick(): void {
      this.tickTimeoutHandle = window.setTimeout(() => {

         // reset the timeout handle
         this.tickTimeoutHandle = NaN;

         // call the callback
         this.tick();

      }, this.remainingMs % 1000 + 1);
   }
}
