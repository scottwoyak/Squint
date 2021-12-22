import { expect } from 'chai';
import { ITimerInfo } from '../src/Apps/Squint/ITimerInfo';
import { ModelTimer } from '../src/Apps/Squint/ModelTimer';
import { TimeMs } from '../src/Apps/Squint/TimeMs';
import { Stopwatch } from '../src/Util/Stopwatch';

describe.only('ModelTimer', function () {

   it('should tick', async function () {

      let modelTimer = new ModelTimer();
      let sw = new Stopwatch(false);

      let promise = new Promise<void>((resolve, reject) => {

         let tickCount = 0;

         setTimeout(() => {
            expect(tickCount).to.equal(3);
            resolve();
         }, 3100);

         modelTimer.onTick = (info: ITimerInfo) => {
            tickCount++;

            try {
               if (tickCount === 1) {
                  expect(info.running).to.be.true;
                  expect(sw.elapsedS).to.be.greaterThan(0);
                  expect(sw.elapsedS).to.be.lessThan(0.1);
               }
               else if (tickCount === 2) {
                  expect(info.running).to.be.true;
                  expect(sw.elapsedS).to.be.greaterThan(1);
                  expect(sw.elapsedS).to.be.lessThan(1.1);
                  modelTimer.stop();
               }
               else if (tickCount === 3) {
                  // happens after we call stop()
                  expect(info.running).to.be.false;
               }
            }
            catch (err) {
               reject(err);
            }
         }
      });

      sw.start();
      modelTimer.start();

      return promise;
   });

   it('should immediately sound the alarm if durationMs is zero', async function () {

      let modelTimer = new ModelTimer();

      modelTimer.durationMs = 0;
      modelTimer.start();

      expect(modelTimer.running).to.be.false;
      expect(modelTimer.alarmSounding).to.be.true;
   })

   it('reset() should stop the alarm', async function () {

      let modelTimer = new ModelTimer();

      modelTimer.durationMs = 0;
      modelTimer.start();

      expect(modelTimer.running).to.be.false;
      expect(modelTimer.alarmSounding).to.be.true;

      modelTimer.reset();
      expect(modelTimer.running).to.be.false;
      expect(modelTimer.alarmSounding).to.be.false;
   })

   it('stopAlarm() should stop the alarm', async function () {

      let modelTimer = new ModelTimer();

      modelTimer.durationMs = 0;
      modelTimer.start();

      expect(modelTimer.running).to.be.false;
      expect(modelTimer.alarmSounding).to.be.true;

      modelTimer.stopAlarm();
      expect(modelTimer.running).to.be.false;
      expect(modelTimer.alarmSounding).to.be.false;
   })

   it('changing durationMs should stop the alarm', async function () {

      let modelTimer = new ModelTimer();

      modelTimer.durationMs = 0;
      modelTimer.start();

      expect(modelTimer.running).to.be.false;
      expect(modelTimer.alarmSounding).to.be.true;

      modelTimer.durationMs = 1000;

      expect(modelTimer.running).to.be.false;
      expect(modelTimer.alarmSounding).to.be.false;
   })

   it('should sound an alarm when time has expired', async function () {

      let modelTimer = new ModelTimer();

      // greater than one sec to make sure the timer ticks
      modelTimer.durationMs = 2000;
      let sw = new Stopwatch(false);

      let promise = new Promise<void>((resolve, reject) => {

         modelTimer.onAlarm = (sound: boolean) => {
            try {
               expect(modelTimer.running).to.be.false;
               expect(sound).to.be.true;
               expect(sw.elapsedMs).to.be.greaterThan(modelTimer.durationMs);
               expect(sw.elapsedMs).to.be.lessThan(modelTimer.durationMs + 20);
               resolve();

               modelTimer.stopAlarm();
            }
            catch (err) {
               reject(err);
            }
         }
      });

      sw.start();
      modelTimer.start();

      return promise;
   });

   it('should stop the alarm after the timeout period', async function () {

      let modelTimer = new ModelTimer();
      modelTimer.durationMs = 100;
      modelTimer.alarmDurationMs = 200;

      let sw = new Stopwatch(false);

      let alarmCount = 0;
      let promise = new Promise<void>((resolve, reject) => {

         modelTimer.onAlarm = (sound: boolean) => {
            try {
               alarmCount++;

               if (alarmCount === 1) {
                  expect(modelTimer.running).to.be.false;
                  expect(sound).to.be.true;
                  expect(sw.elapsedMs).to.be.greaterThan(100);
                  expect(sw.elapsedMs).to.be.lessThan(120);
               }
               else if (alarmCount === 2) {
                  expect(modelTimer.running).to.be.false;
                  expect(sound).to.be.false;
                  expect(sw.elapsedMs).to.be.greaterThan(300);
                  expect(sw.elapsedMs).to.be.lessThan(350);
                  resolve();
               }
            }
            catch (err) {
               reject(err);
            }
         }
      });

      sw.start();
      modelTimer.start();

      return promise;
   });

   it('should be initialized to 20 minutes', async function () {

      let modelTimer = new ModelTimer();

      expect(modelTimer.durationMs).to.equal(20 * 60 * 1000);
   });

   it('should alternate between 20 and 7 minutes', async function () {

      let modelTimer = new ModelTimer();

      expect(modelTimer.durationMs).to.equal(20 * 60 * 1000);

      modelTimer.start();
      modelTimer.stop();
      modelTimer.reset();

      expect(modelTimer.durationMs).to.equal(7 * 60 * 1000);

      modelTimer.start();
      modelTimer.stop();
      modelTimer.reset();

      expect(modelTimer.durationMs).to.equal(20 * 60 * 1000);
   });

   it('should reset to the initial duration if a non standard time is used', async function () {

      let modelTimer = new ModelTimer();

      expect(modelTimer.durationMs).to.equal(20 * 60 * 1000);

      modelTimer.durationMs = 1000;
      modelTimer.reset();

      expect(modelTimer.durationMs).to.equal(1000);
   });

   it('should only reset once', async function () {

      let modelTimer = new ModelTimer();

      expect(modelTimer.durationMs).to.equal(20 * 60 * 1000);

      modelTimer.start();
      modelTimer.stop();
      modelTimer.reset();

      expect(modelTimer.durationMs).to.equal(7 * 60 * 1000);

      modelTimer.reset();

      // still 7 minutes
      expect(modelTimer.durationMs).to.equal(7 * 60 * 1000);
   });

   it('should stop running when reset', async function () {

      let modelTimer = new ModelTimer();

      expect(modelTimer.durationMs).to.equal(20 * 60 * 1000);

      modelTimer.start();
      expect(modelTimer.running).to.be.true;

      modelTimer.reset();
      expect(modelTimer.running).to.be.false;
   });

   it('should sound alerts at 1 and 10 minutes remaining', async function () {

      let modelTimer = new ModelTimer();

      // tick intervals are 1 sec, so make our alerts occur on different ticks
      modelTimer.alert1MinuteRemainingMs = 1000;
      modelTimer.alert10MinutesRemainingMs = 2000;
      modelTimer.durationMs = 3000;

      let sw = new Stopwatch();

      let alert1Count = 0;
      let alert10Count = 0;
      let bufferMs = 30;
      let promise = new Promise<void>((resolve, reject) => {

         modelTimer.onAlarm = (sound: boolean) => {
            try {
               expect(alert1Count).to.equal(1, '1 min alert count at alarm');
               expect(alert10Count).to.equal(1, '10 min alert count at alarm');
               expect(sw.elapsedMs).to.be.lessThan(modelTimer.durationMs + bufferMs);
               expect(sw.elapsedMs).to.be.greaterThan(modelTimer.durationMs);
            }
            catch (err) {
               reject(err);
               modelTimer.stop();
            }
            resolve();
         }
         modelTimer.onAlert10MinutesRemaining = () => {
            try {
               expect(alert1Count).to.equal(0, '1 min alert count at 10 min alert');
               expect(alert10Count).to.equal(0, '10 min alert count at 10 min alert');
               let remaingingMs = modelTimer.durationMs - sw.elapsedMs;
               expect(remaingingMs).to.be.lessThan(modelTimer.alert10MinutesRemainingMs);
               expect(remaingingMs).to.be.greaterThan(modelTimer.alert10MinutesRemainingMs - bufferMs);
            }
            catch (err) {
               reject(err);
               modelTimer.stop();
            }
            alert10Count++;
         }
         modelTimer.onAlert1MinuteRemaining = () => {
            try {
               expect(alert1Count).to.equal(0, '1 min alert count at 1 min alert');
               expect(alert10Count).to.equal(1, '10 min alert count at 1 min alert');
               let remaingingMs = modelTimer.durationMs - sw.elapsedMs;
               expect(remaingingMs).to.be.lessThan(modelTimer.alert1MinuteRemainingMs);
               expect(remaingingMs).to.be.greaterThan(modelTimer.alert1MinuteRemainingMs - bufferMs);
            }
            catch (err) {
               reject(err);
               modelTimer.stop();
            }
            alert1Count++;
         }
      });

      modelTimer.start(true);
      expect(modelTimer.soundAlerts).to.be.true;
      sw.start();

      return promise;
   });

   it('should not sound alerts if disabled', async function () {

      let modelTimer = new ModelTimer();

      // tick intervals are 1 sec, so make our alerts occur on different ticks
      modelTimer.alert1MinuteRemainingMs = 1000;
      modelTimer.alert10MinutesRemainingMs = 2000;
      modelTimer.durationMs = 3000;

      let sw = new Stopwatch();

      let bufferMs = 30;
      let promise = new Promise<void>((resolve, reject) => {

         modelTimer.onAlarm = (sound: boolean) => {
            try {
               expect(sw.elapsedMs).to.be.lessThan(modelTimer.durationMs + bufferMs);
               expect(sw.elapsedMs).to.be.greaterThan(modelTimer.durationMs);
            }
            catch (err) {
               reject(err);
               modelTimer.stop();
            }
            resolve();
         }
         modelTimer.onAlert10MinutesRemaining = () => {
            reject('unexpected 10 min alert sounded');
         }
         modelTimer.onAlert1MinuteRemaining = () => {
            reject('unexpected 10 min alert sounded');
         }
      });

      modelTimer.start(false);
      expect(modelTimer.soundAlerts).to.be.false;
      sw.start();

      return promise;
   });

   it('should only sound alerts if the timer duration is greater than 10 minutes', async function () {

      let modelTimer = new ModelTimer();

      modelTimer.durationMs = 3 * TimeMs.Min;
      modelTimer.start();
      expect(modelTimer.soundAlerts).to.be.false;
      modelTimer.stop();

      modelTimer.durationMs = 30 * TimeMs.Min;
      modelTimer.start();
      expect(modelTimer.soundAlerts).to.be.true;
      modelTimer.stop();

      modelTimer.durationMs = 3 * TimeMs.Min;
      modelTimer.start();
      expect(modelTimer.soundAlerts).to.be.false;
      modelTimer.stop();
   });

   // automatically restart if no action is taken
   // cancel autostart if stopped
   // cancel autostart if reset
   // cancel autostart if time is changed
});
