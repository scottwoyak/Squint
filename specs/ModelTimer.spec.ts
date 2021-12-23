import { expect } from 'chai';
import { ITimerInfo } from '../src/Apps/Squint/ITimerInfo';
import { ModelTimer } from '../src/Apps/Squint/ModelTimer';
import { TimeMs } from '../src/Apps/Squint/TimeMs';
import { Stopwatch } from '../src/Util/Stopwatch';
import { sleep } from './util';

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
                  modelTimer.reset();
               }
               else if (tickCount === 3) {
                  // happens after we call stop()
                  expect(info.running).to.be.false;
               }
            }
            catch (err) {
               reject(err);
               modelTimer.reset();
            }
         }
      });

      sw.start();
      modelTimer.start();

      return promise;
   });

   it('should send a timer started event', async function () {

      let modelTimer = new ModelTimer();

      let promise = new Promise<void>((resolve, reject) => {

         modelTimer.onTimerStarted = () => {
            resolve();
            modelTimer.reset();
         }
      });

      modelTimer.start();

      return promise;
   });

   it('should immediately sound the alarm if durationMs is zero', async function () {

      let modelTimer = new ModelTimer();

      modelTimer.durationMs = 0;
      modelTimer.start();

      expect(modelTimer.running).to.be.false;
      expect(modelTimer.alarmSounding).to.be.true;

      // stop the autostart timer
      modelTimer.reset();
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

      // stop the autostart timer
      modelTimer.reset();
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

      // stop the autostart timer
      modelTimer.reset();
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
               expect(sw.elapsedMs).to.be.lessThan(modelTimer.durationMs + 50);
               resolve();
            }
            catch (err) {
               reject(err);
            }

            // stop the autostart timer
            modelTimer.reset();
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

                  // stop the autostart timer
                  modelTimer.reset();
               }
            }
            catch (err) {
               reject(err);

               // stop the autostart timer
               modelTimer.reset();
            }
         }
      });

      sw.start();
      modelTimer.start();

      return promise;
   });

   it('should be initialized to 20 minutes', async function () {

      let modelTimer = new ModelTimer();

      expect(modelTimer.durationMs).to.equal(TimeMs.StdPose);
   });

   it('next() should alternate between 20 and 7 minutes', async function () {

      let modelTimer = new ModelTimer();

      expect(modelTimer.durationMs).to.equal(TimeMs.StdPose);

      modelTimer.next();

      expect(modelTimer.durationMs).to.equal(TimeMs.StdBreak);

      modelTimer.next();

      expect(modelTimer.durationMs).to.equal(TimeMs.StdPose);
   });

   it('next() should reset elapsed time to zero', async function () {

      let modelTimer = new ModelTimer();

      expect(modelTimer.durationMs).to.equal(TimeMs.StdPose);

      modelTimer.start();
      sleep(10);
      expect(modelTimer.remainingMs).to.be.lessThan(modelTimer.durationMs);

      modelTimer.pause();
      modelTimer.next();
      expect(modelTimer.remainingMs).to.equal(modelTimer.durationMs);
   });

   it('reset() should stop running', async function () {

      let modelTimer = new ModelTimer();

      modelTimer.start();
      expect(modelTimer.running).to.be.true;

      modelTimer.reset();
      expect(modelTimer.running).to.be.false;
   });

   it('reset() should stop the alarm sounding and the autostart timer', async function () {

      let modelTimer = new ModelTimer();
      modelTimer.durationMs = 1 * TimeMs.Sec;
      let alarmSounded = false;

      let promise = new Promise<void>((resolve, reject) => {

         modelTimer.onAlarm = (sound: boolean) => {

            try {
               if (sound) {
                  expect(alarmSounded).to.be.false;
                  alarmSounded = true;
                  modelTimer.reset();
                  expect(modelTimer.running).to.be.false;
               }
               else {
                  expect(alarmSounded).to.be.true;
                  resolve();
                  expect(modelTimer.running).to.be.false;
                  expect(modelTimer.autoStartTimerRunning).to.be.false;
               }
            }
            catch (err) {
               reject(err);
               modelTimer.reset();
            }
         }
      });

      modelTimer.start();

      return promise;
   });

   it('should send alerts at 1 and 10 minutes remaining', async function () {

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
               resolve();
            }
            catch (err) {
               reject(err);
            }

            modelTimer.reset();
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
               modelTimer.reset();
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
               modelTimer.reset();
            }
            alert1Count++;
         }
      });

      modelTimer.start(true);
      expect(modelTimer.soundAlerts).to.be.true;
      sw.start();

      return promise;
   });

   it('should NOT send alerts if alerts are disabled', async function () {

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
               resolve();
            }
            catch (err) {
               reject(err);
            }
            modelTimer.reset();
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

   it('should NOT sound alerts if the timer duration is less than 10 minutes', async function () {

      let modelTimer = new ModelTimer();

      modelTimer.durationMs = 3 * TimeMs.Min;
      modelTimer.start();
      expect(modelTimer.soundAlerts).to.be.false;
      modelTimer.reset();

      modelTimer.durationMs = 30 * TimeMs.Min;
      modelTimer.start();
      expect(modelTimer.soundAlerts).to.be.true;
      modelTimer.reset();

      modelTimer.durationMs = 3 * TimeMs.Min;
      modelTimer.start();
      expect(modelTimer.soundAlerts).to.be.false;
      modelTimer.reset();
   });

   it('should automatically restart after the alarm goes off', async function () {

      let modelTimer = new ModelTimer();

      // tick intervals are 1 sec, let a tick occur before the alarm goes off
      let durationMs = 1000;
      let autoStartTimerDurationMs = 500;

      modelTimer.durationMs = durationMs;
      modelTimer.autoStartTimerDurationMs = autoStartTimerDurationMs;

      let sw = new Stopwatch();
      let first = true;

      let bufferMs = 30;
      let promise = new Promise<void>((resolve, reject) => {

         modelTimer.onAlarm = (sound: boolean) => {
            try {
               // when the alarm goes off, check that the autostart timer has started
               if (sound === true) {
                  expect(modelTimer.autoStartTimerRunning).to.be.true;
                  expect(modelTimer.alarmSounding).to.be.true;
                  expect(modelTimer.running).to.be.false;
               }
            }
            catch (err) {
               reject(err);
            }
         }

         modelTimer.onTimerStarted = () => {
            // ignore the initial timer started event. We want to catch the one from
            // the autostart activity
            if (first) {
               first = false;
               return;
            }

            try {
               let expectedElapsedTime = durationMs + autoStartTimerDurationMs;
               expect(sw.elapsedMs).to.be.greaterThan(expectedElapsedTime);
               expect(sw.elapsedMs).to.be.lessThan(expectedElapsedTime + bufferMs);
               expect(modelTimer.alarmSounding).to.be.false;
               expect(modelTimer.running).to.be.true;
            }
            catch (err) {
               reject(err);
               modelTimer.reset();
            }
            resolve();
            modelTimer.reset();
         }
      });

      modelTimer.start();
      expect(modelTimer.autoStartTimerRunning).to.be.false;
      sw.start();

      return promise;
   });

   it('auto start should start when alarm is stopped', async function () {

      let modelTimer = new ModelTimer();

      // tick intervals are 1 sec, let a tick occur before the alarm goes off
      let durationMs = 1000;

      modelTimer.durationMs = durationMs;

      let promise = new Promise<void>((resolve, reject) => {

         modelTimer.onAlarm = (sound: boolean) => {

            // ignore events from the alarm turning off
            if (sound === false) {
               return;
            }

            try {
               expect(modelTimer.autoStartTimerRunning).to.be.true;
               expect(modelTimer.alarmSounding).to.be.true;
               expect(modelTimer.running).to.be.false;

               modelTimer.stopAlarm();

               expect(modelTimer.autoStartTimerRunning).to.be.true;
               expect(modelTimer.alarmSounding).to.be.false;
               expect(modelTimer.running).to.be.false;

               resolve();
               modelTimer.reset();
            }
            catch (err) {
               reject(err);
               modelTimer.reset();
            }
         }
      });

      modelTimer.start();

      return promise;
   });

   it('auto start should NOT start if the timer is reset', async function () {

      let modelTimer = new ModelTimer();

      // tick intervals are 1 sec, let a tick occur before the alarm goes off
      modelTimer.durationMs = 1000;

      let promise = new Promise<void>((resolve, reject) => {

         modelTimer.onAlarm = (sound: boolean) => {

            // ignore events from the alarm turning off
            if (sound === false) {
               return;
            }

            try {
               expect(modelTimer.autoStartTimerRunning).to.be.true;
               expect(modelTimer.alarmSounding).to.be.true;
               expect(modelTimer.running).to.be.false;

               modelTimer.reset();

               expect(modelTimer.autoStartTimerRunning).to.be.false;
               expect(modelTimer.alarmSounding).to.be.false;
               expect(modelTimer.running).to.be.false;

               resolve();
            }
            catch (err) {
               reject(err);
               modelTimer.reset();
            }
         }
      });

      modelTimer.start();

      return promise;
   });

   it('auto start should get cancelled if addOne() is called', async function () {

      let modelTimer = new ModelTimer();

      // tick intervals are 1 sec, let a tick occur before the alarm goes off
      modelTimer.durationMs = 1000;

      let promise = new Promise<void>((resolve, reject) => {

         modelTimer.onAlarm = (sound: boolean) => {

            // ignore events from the alarm turning off
            if (sound === false) {
               return;
            }

            try {
               expect(modelTimer.autoStartTimerRunning).to.be.true;
               expect(modelTimer.alarmSounding).to.be.true;
               expect(modelTimer.running).to.be.false;

               modelTimer.addOne();

               expect(modelTimer.autoStartTimerRunning).to.be.false;
               expect(modelTimer.alarmSounding).to.be.true;
               expect(modelTimer.running).to.be.false;

               resolve();
            }
            catch (err) {
               reject(err);
            }

            modelTimer.reset();
         }
      });

      modelTimer.start();

      return promise;
   });

   it('auto start should get cancelled if subtractOne() is called', async function () {

      let modelTimer = new ModelTimer();

      // tick intervals are 1 sec, let a tick occur before the alarm goes off
      modelTimer.durationMs = 1000;

      let promise = new Promise<void>((resolve, reject) => {

         modelTimer.onAlarm = (sound: boolean) => {

            // ignore events from the alarm turning off
            if (sound === false) {
               return;
            }

            try {
               expect(modelTimer.autoStartTimerRunning).to.be.true;
               expect(modelTimer.alarmSounding).to.be.true;
               expect(modelTimer.running).to.be.false;

               modelTimer.subtractOne();

               expect(modelTimer.autoStartTimerRunning).to.be.false;
               expect(modelTimer.alarmSounding).to.be.true;
               expect(modelTimer.running).to.be.false;

               resolve();
            }
            catch (err) {
               reject(err);
            }

            modelTimer.reset();
         }
      });

      modelTimer.start();

      return promise;
   });

   it.only('should send change alerts', async function () {

      let modelTimer = new ModelTimer();

      modelTimer.durationMs = 4 * TimeMs.Sec;
      modelTimer.poseLengthsM = [1, 2];
      let expected = [1000, 3000];

      let sw = new Stopwatch();
      let poseCount = 0;

      let promise = new Promise<void>((resolve, reject) => {

         modelTimer.onAlarm = (sound: boolean) => {
            try {
               expect(poseCount).to.equal(modelTimer.poseLengthsM.length, 'pose count');
               resolve();
            }
            catch (err) {
               reject(err);
            }

            modelTimer.reset();
         }

         modelTimer.onChangePose = () => {
            try {
               expect(modelTimer.elapsedMs).to.be.greaterThan(expected[poseCount]);
               expect(modelTimer.elapsedMs).to.be.lessThan(expected[poseCount] + 30);
               poseCount++;
            }
            catch (err) {
               reject(err);
               modelTimer.reset();
            }
         }
      });

      modelTimer.start();
      sw.start();

      return promise;
   });

   it('should NOT send a change alert for poses after the alarm has sounded', async function () {
      let modelTimer = new ModelTimer();

      modelTimer.durationMs = 2 * TimeMs.Sec;
      modelTimer.poseLengthsM = [1, 1];

      let sw = new Stopwatch();
      let poseCount = 0;

      let promise = new Promise<void>((resolve, reject) => {

         modelTimer.onAlarm = (sound: boolean) => {
            try {
               expect(poseCount).to.equal(modelTimer.poseLengthsM.length - 1, 'pose count');
               resolve();
            }
            catch (err) {
               reject(err);
            }

            modelTimer.reset();
         }
         modelTimer.onChangePose = () => {
            try {
               expect(poseCount).to.be.lessThan(2);
               poseCount++;
            }
            catch (err) {
               reject(err);
               modelTimer.reset();
            }
         }
      });

      modelTimer.start();
      sw.start();

      return promise;
   });

   it('should let you modify poses while running', async function () {
      let modelTimer = new ModelTimer();

      modelTimer.durationMs = 4 * TimeMs.Sec;
      modelTimer.poseLengthsM = [1];

      let sw = new Stopwatch();
      let poseCount = 0;

      let promise = new Promise<void>((resolve, reject) => {

         modelTimer.onAlarm = (sound: boolean) => {
            try {
               expect(modelTimer.poseLengthsM.length).to.equal(3, 'requestd poses');
               expect(poseCount).to.equal(3, 'pose event count');
               resolve();
            }
            catch (err) {
               reject(err);
            }

            modelTimer.reset();
         }
         modelTimer.onChangePose = () => {
            try {
               // the first pose here should get ignored, but the other two should still fire
               if (modelTimer.poseLengthsM.length === 1) {
                  modelTimer.poseLengthsM = [1, 1, 1];
               }
               poseCount++;
            }
            catch (err) {
               reject(err);
               modelTimer.reset();
            }
         }
      });

      modelTimer.start();
      sw.start();

      return promise;
   });

   it('should retain change alerts after reset()', async function () {

      let modelTimer = new ModelTimer();

      modelTimer.durationMs = 2 * TimeMs.Sec;
      modelTimer.poseLengthsM = [1];

      let alarmCount = 0;
      let poseCount = 0;
      let promise = new Promise<void>((resolve, reject) => {

         modelTimer.onAlarm = (sound: boolean) => {
            try {
               if (sound === true) {
                  alarmCount++;

                  expect(alarmCount).to.be.lessThanOrEqual(2);
                  if (alarmCount === 1) {
                     expect(poseCount).to.equal(1);
                     modelTimer.reset();
                     modelTimer.start();
                  }
                  else {
                     expect(poseCount).to.equal(2);
                     modelTimer.reset();
                     resolve();
                  }
               }
            }
            catch (err) {
               reject(err);
               modelTimer.reset();
            }
         }

         modelTimer.onChangePose = () => {
            poseCount++;
         }
      });

      modelTimer.start();

      return promise;
   });
});
