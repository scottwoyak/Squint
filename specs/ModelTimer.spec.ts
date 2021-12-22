import { expect } from 'chai';
import { ITimerInfo } from '../src/Apps/Squint/ITimerInfo';
import { ModelTimer } from '../src/Apps/Squint/ModelTimer';
import { Stopwatch } from '../src/Util/Stopwatch';
import { TestUrlLocalhost } from './Constants';

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
      modelTimer.durationMs = 100;
      let sw = new Stopwatch(false);

      let promise = new Promise<void>((resolve, reject) => {

         modelTimer.onAlarm = (sound: boolean) => {
            try {
               expect(modelTimer.running).to.be.false;
               expect(sound).to.be.true;
               expect(sw.elapsedMs).to.be.greaterThan(100);
               expect(sw.elapsedMs).to.be.lessThan(120);
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
});
