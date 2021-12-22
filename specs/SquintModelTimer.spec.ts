import { expect } from 'chai';
import { ITimerInfo } from '../src/Apps/Squint/ITimerInfo';
import { SquintModelTimer } from '../src/Apps/Squint/SquintModelTimer';
import { Stopwatch } from '../src/Util/Stopwatch';
import { TestUrlLocalhost } from './Constants';
import { createSession, createSquint, sleep, squintAfterEach, squintBeforeEach, TimeMsTesting } from './util';

describe('SquintModelTimer', function () {

   beforeEach(async function () {
      return squintBeforeEach(this);
   });

   afterEach(async function () {
      return squintAfterEach(this);
   });

   describe('Single Timer', function () {

      it('should tick', async function () {

         let squint = await createSquint(TestUrlLocalhost, 'Squint');

         let timer = new SquintModelTimer(squint);
         let sw = new Stopwatch(false);

         let promise = new Promise<void>((resolve, reject) => {

            let tickCount = 0;

            setTimeout(() => {
               expect(tickCount).to.equal(3);
               resolve();
            }, 3100);

            timer.onTick = (info: ITimerInfo) => {
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
                     timer.stop();
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
         timer.start();

         return promise;
      });

      it('should immediately sound the alarm if durationMs is zero', async function () {

         let squintHost = await createSquint(TestUrlLocalhost, 'TestHost');

         squintHost.modelTimer.durationMs = 0;
         squintHost.modelTimer.start();

         expect(squintHost.modelTimer.running).to.be.false;
         expect(squintHost.modelTimer.alarmSounding).to.be.true;
      })

      it('reset() should stop the alarm', async function () {

         let squintHost = await createSquint(TestUrlLocalhost, 'TestHost');

         squintHost.modelTimer.durationMs = 0;
         squintHost.modelTimer.start();

         expect(squintHost.modelTimer.running).to.be.false;
         expect(squintHost.modelTimer.alarmSounding).to.be.true;

         squintHost.modelTimer.reset();
         expect(squintHost.modelTimer.running).to.be.false;
         expect(squintHost.modelTimer.alarmSounding).to.be.false;
      })

      it('stopAlarm() should stop the alarm', async function () {

         let squintHost = await createSquint(TestUrlLocalhost, 'TestHost');

         squintHost.modelTimer.durationMs = 0;
         squintHost.modelTimer.start();

         expect(squintHost.modelTimer.running).to.be.false;
         expect(squintHost.modelTimer.alarmSounding).to.be.true;

         squintHost.modelTimer.stopAlarm();
         expect(squintHost.modelTimer.running).to.be.false;
         expect(squintHost.modelTimer.alarmSounding).to.be.false;
      })

      it('changing durationMs should stop the alarm', async function () {

         let squintHost = await createSquint(TestUrlLocalhost, 'TestHost');

         squintHost.modelTimer.durationMs = 0;
         squintHost.modelTimer.start();

         expect(squintHost.modelTimer.running).to.be.false;
         expect(squintHost.modelTimer.alarmSounding).to.be.true;

         squintHost.modelTimer.durationMs = 1000;

         expect(squintHost.modelTimer.running).to.be.false;
         expect(squintHost.modelTimer.alarmSounding).to.be.false;
      })

      it('should stop running when Squint closes', async function () {

         let squintHost = await createSquint(TestUrlLocalhost, 'TestHost');

         squintHost.modelTimer.start();
         expect(squintHost.modelTimer.running).to.be.true;
         expect(squintHost.modelTimer.alarmSounding).to.be.false;

         squintHost.close();
         expect(squintHost.modelTimer.running).to.be.false;
         expect(squintHost.modelTimer.alarmSounding).to.be.false;
      })

      it('should stop the alarm when Squint closes', async function () {

         let squintHost = await createSquint(TestUrlLocalhost, 'TestHost');

         squintHost.modelTimer.durationMs = 10;
         squintHost.modelTimer.start();
         await sleep(20);

         expect(squintHost.modelTimer.running).to.be.false;
         expect(squintHost.modelTimer.alarmSounding).to.be.true;

         squintHost.close();
         expect(squintHost.modelTimer.running).to.be.false;
         expect(squintHost.modelTimer.alarmSounding).to.be.false;
      })

      it('should tick once when Squint closes (timer running)', async function () {

         let squintHost = await createSquint(TestUrlLocalhost, 'TestHost');

         squintHost.modelTimer.start();
         expect(squintHost.modelTimer.running).to.be.true;
         expect(squintHost.modelTimer.alarmSounding).to.be.false;

         let promise = new Promise<void>((resolve, reject) => {
            let count = 0;
            squintHost.modelTimer.onTick = (info: ITimerInfo) => {
               count++;
               if (count === 1) {
                  try {
                     expect(info.running).to.be.false;
                     expect(info.alarmSounding).to.be.false;
                  }
                  catch (err) {
                     reject(err);
                  }
               }
               else {
                  reject('unexpected onTick()');
               }
            }

            setTimeout(() => {
               if (count === 1) {
                  resolve();
               }
            }, 500);
         });

         squintHost.close();
         expect(squintHost.modelTimer.running).to.be.false;

         return promise;
      })

      it('should tick once when Squint closes (alarm sounding)', async function () {

         let squintHost = await createSquint(TestUrlLocalhost, 'TestHost');

         squintHost.modelTimer.durationMs = 10;
         squintHost.modelTimer.start();
         expect(squintHost.modelTimer.running).to.be.true;
         expect(squintHost.modelTimer.alarmSounding).to.be.false;

         await sleep(20);

         let promise = new Promise<void>((resolve, reject) => {
            let count = 0;
            squintHost.modelTimer.onTick = (info: ITimerInfo) => {
               count++;
               if (count === 1) {
                  try {
                     expect(info.running).to.be.false;
                     expect(info.alarmSounding).to.be.false;
                  }
                  catch (err) {
                     reject(err);
                  }
               }
               else {
                  reject('unexpected onTick()');
               }
            }

            setTimeout(() => {
               if (count === 1) {
                  resolve();
               }
            }, 500);
         });

         squintHost.close();
         expect(squintHost.modelTimer.running).to.be.false;

         return promise;
      })

      it('should sound an alarm when time has expired', async function () {
         let squint = await createSquint(TestUrlLocalhost, 'Squint');

         let timer = new SquintModelTimer(squint);
         timer.durationMs = 100;
         let sw = new Stopwatch(false);

         let promise = new Promise<void>((resolve, reject) => {

            timer.onAlarm = (sound: boolean) => {
               try {
                  expect(timer.running).to.be.false;
                  expect(sound).to.be.true;
                  expect(sw.elapsedMs).to.be.greaterThan(100);
                  expect(sw.elapsedMs).to.be.lessThan(120);
                  resolve();

                  timer.stopAlarm();
               }
               catch (err) {
                  reject(err);
               }
            }
         });

         sw.start();
         timer.start();

         return promise;
      });

      it('should stop the alarm after the timeout period', async function () {
         let squint = await createSquint(TestUrlLocalhost, 'Squint');

         let timer = new SquintModelTimer(squint);
         timer.durationMs = 100;
         timer.alarmDurationMs = 200;

         let sw = new Stopwatch(false);

         let alarmCount = 0;
         let promise = new Promise<void>((resolve, reject) => {

            timer.onAlarm = (sound: boolean) => {
               try {
                  alarmCount++;

                  if (alarmCount === 1) {
                     expect(timer.running).to.be.false;
                     expect(sound).to.be.true;
                     expect(sw.elapsedMs).to.be.greaterThan(100);
                     expect(sw.elapsedMs).to.be.lessThan(120);
                  }
                  else if (alarmCount === 2) {
                     expect(timer.running).to.be.false;
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
         timer.start();

         return promise;
      });

      it('should be initialized to 20 minutes', async function () {

         let squintHost = await createSquint(TestUrlLocalhost, 'TestHost')

         expect(squintHost.modelTimer.durationMs).to.equal(20 * 60 * 1000);

         let sessionId = await squintHost.createSession();

         expect(squintHost.modelTimer.durationMs).to.equal(20 * 60 * 1000);

         let squintViewer = await createSquint(TestUrlLocalhost, 'TestViewer')

         expect(squintViewer.modelTimer.durationMs).to.equal(20 * 60 * 1000);

         await squintViewer.joinSession(sessionId);

         expect(squintViewer.modelTimer.durationMs).to.equal(20 * 60 * 1000);
      });

      it('should alternate between 20 and 7 minutes', async function () {
         let squintHost = await createSquint(TestUrlLocalhost, 'TestHost')

         expect(squintHost.modelTimer.durationMs).to.equal(20 * 60 * 1000);

         squintHost.modelTimer.start();
         squintHost.modelTimer.stop();
         squintHost.modelTimer.reset();

         expect(squintHost.modelTimer.durationMs).to.equal(7 * 60 * 1000);

         squintHost.modelTimer.start();
         squintHost.modelTimer.stop();
         squintHost.modelTimer.reset();

         expect(squintHost.modelTimer.durationMs).to.equal(20 * 60 * 1000);
      });

      it('should reset to the initial duration if a non standard time is used', async function () {
         let squintHost = await createSquint(TestUrlLocalhost, 'TestHost')

         expect(squintHost.modelTimer.durationMs).to.equal(20 * 60 * 1000);

         squintHost.modelTimer.durationMs = 1000;
         squintHost.modelTimer.reset();

         expect(squintHost.modelTimer.durationMs).to.equal(1000);
      });
   });

   describe('Multi-Timer Synchronization', function () {

      enum Source {
         Host = 'Host',
         Viewer1 = 'Viewer1',
         Viewer2 = 'Viewer2',
      }

      [
         [Source.Viewer2, Source.Host],
         [Source.Viewer2, Source.Viewer1],
         [Source.Viewer2, Source.Viewer2],
         [Source.Host, Source.Host],
         [Source.Host, Source.Viewer1],
         [Source.Host, Source.Viewer2],
         [Source.Viewer1, Source.Host],
         [Source.Viewer1, Source.Viewer1],
         [Source.Viewer1, Source.Viewer2],
      ].forEach((startStop: Source[]) => {

         it('should synchronize timer starts/stops start:' + startStop[0] + ' stop:' + startStop[1], async function () {
            let { squintHost, squintViewers } = await createSession(2);

            switch (startStop[0]) {
               case Source.Host:
                  squintHost.modelTimer.start();
                  break;
               case Source.Viewer1:
                  squintViewers[0].modelTimer.start();
                  break;
               case Source.Viewer2:
                  squintViewers[1].modelTimer.start();
                  break;
            }

            await sleep(5 * TimeMsTesting.Buffer);

            expect(squintHost.modelTimer.running).to.be.true;
            expect(squintViewers[0].modelTimer.running).to.be.true;
            expect(squintViewers[1].modelTimer.running).to.be.true;

            switch (startStop[1]) {
               case Source.Host:
                  squintHost.modelTimer.stop();
                  break;
               case Source.Viewer1:
                  squintViewers[0].modelTimer.stop();
                  break;
               case Source.Viewer2:
                  squintViewers[1].modelTimer.stop();
                  break;
            }

            await sleep(TimeMsTesting.Buffer);

            expect(squintHost.modelTimer.running).to.be.false;
            expect(squintViewers[0].modelTimer.running).to.be.false;
            expect(squintViewers[1].modelTimer.running).to.be.false;
         });
      });

      [
         Source.Host,
         Source.Viewer1,
         Source.Viewer2
      ].forEach((source: Source) => {

         it('should synchronize duration values (timer not running). Change source:' + source, async function () {
            let { squintHost, squintViewers } = await createSession(2);

            let durationMs = 10;
            switch (source) {
               case Source.Host:
                  squintHost.modelTimer.durationMs = durationMs;
                  break;
               case Source.Viewer1:
                  squintViewers[0].modelTimer.durationMs = durationMs;
                  break;
               case Source.Viewer2:
                  squintViewers[1].modelTimer.durationMs = durationMs;
                  break;
            }

            await sleep(TimeMsTesting.Buffer);

            expect(squintHost.modelTimer.durationMs).to.equal(durationMs);
            expect(squintViewers[0].modelTimer.durationMs).to.equal(durationMs);
            expect(squintViewers[1].modelTimer.durationMs).to.equal(durationMs);

            expect(squintHost.modelTimer.running).to.be.false;
            expect(squintViewers[0].modelTimer.running).to.be.false;
            expect(squintViewers[1].modelTimer.running).to.be.false;

            expect(squintHost.modelTimer.remainingMs).to.equal(durationMs);
            expect(squintViewers[0].modelTimer.remainingMs).to.equal(durationMs);
            expect(squintViewers[1].modelTimer.remainingMs).to.equal(durationMs);
         });
      });

      [
         [Source.Host, Source.Host],
         [Source.Host, Source.Viewer1],
         [Source.Host, Source.Viewer2],
         [Source.Viewer1, Source.Host],
         [Source.Viewer1, Source.Viewer1],
         [Source.Viewer1, Source.Viewer2],
         [Source.Viewer2, Source.Host],
         [Source.Viewer2, Source.Viewer1],
         [Source.Viewer2, Source.Viewer2],
      ].forEach((source: Source[]) => {

         it('should synchronize duration values (timer running). start:' + source[0] + ' change:' + source[1], async function () {
            let { squintHost, squintViewers } = await createSession(2);

            let durationMs = 100;

            switch (source[1]) {
               case Source.Host:
                  squintHost.modelTimer.start();
                  break;
               case Source.Viewer1:
                  squintViewers[0].modelTimer.start();
                  break;
               case Source.Viewer2:
                  squintViewers[1].modelTimer.start();
                  break;
            }

            switch (source[1]) {
               case Source.Host:
                  squintHost.modelTimer.durationMs = durationMs;
                  break;
               case Source.Viewer1:
                  squintViewers[0].modelTimer.durationMs = durationMs;
                  break;
               case Source.Viewer2:
                  squintViewers[1].modelTimer.durationMs = durationMs;
                  break;
            }

            await sleep(TimeMsTesting.Interval);

            expect(squintHost.modelTimer.running).to.be.false;
            expect(squintViewers[0].modelTimer.running).to.be.false;
            expect(squintViewers[1].modelTimer.running).to.be.false;

            expect(squintHost.modelTimer.durationMs).to.equal(durationMs);
            expect(squintViewers[0].modelTimer.durationMs).to.equal(durationMs);
            expect(squintViewers[1].modelTimer.durationMs).to.equal(durationMs);
         });
      });

      [
         [Source.Host, Source.Host],
         [Source.Host, Source.Viewer1],
         [Source.Host, Source.Viewer2],
         [Source.Viewer1, Source.Host],
         [Source.Viewer1, Source.Viewer1],
         [Source.Viewer1, Source.Viewer2],
         [Source.Viewer2, Source.Host],
         [Source.Viewer2, Source.Viewer1],
         [Source.Viewer2, Source.Viewer2],
      ].forEach((startStop: Source[]) => {

         it('stopAlarm() on one should stop all alarms. start:' + startStop[0] + ' stop:' + startStop[1], async function () {
            let { squintHost, squintViewers } = await createSession(2);

            let durationMs = 10;

            switch (startStop[0]) {
               case Source.Host:
                  squintHost.modelTimer.durationMs = durationMs;
                  squintHost.modelTimer.start();
                  break;
               case Source.Viewer1:
                  squintViewers[0].modelTimer.durationMs = durationMs;
                  squintViewers[0].modelTimer.start();
                  break;
               case Source.Viewer2:
                  squintViewers[1].modelTimer.durationMs = durationMs;
                  squintViewers[1].modelTimer.start();
                  break;
            }

            await sleep(durationMs + TimeMsTesting.Buffer);

            expect(squintHost.modelTimer.alarmSounding).to.be.true;
            expect(squintViewers[0].modelTimer.alarmSounding).to.be.true;
            expect(squintViewers[1].modelTimer.alarmSounding).to.be.true;

            switch (startStop[1]) {
               case Source.Host:
                  squintHost.modelTimer.stopAlarm();
                  break;
               case Source.Viewer1:
                  squintViewers[0].modelTimer.stopAlarm();
                  break;
               case Source.Viewer2:
                  squintViewers[1].modelTimer.stopAlarm();
                  break;
            }

            await sleep(TimeMsTesting.Buffer);

            expect(squintHost.modelTimer.alarmSounding).to.be.false;
            expect(squintViewers[0].modelTimer.alarmSounding).to.be.false;
            expect(squintViewers[1].modelTimer.alarmSounding).to.be.false;
         });
      });

      [
         [Source.Host, Source.Host],
         [Source.Host, Source.Viewer1],
         [Source.Host, Source.Viewer2],
         [Source.Viewer1, Source.Host],
         [Source.Viewer1, Source.Viewer1],
         [Source.Viewer1, Source.Viewer2],
         [Source.Viewer2, Source.Host],
         [Source.Viewer2, Source.Viewer1],
         [Source.Viewer2, Source.Viewer2],
      ].forEach((startStop: Source[]) => {

         it('reset() on one should stop all alarms. start:' + startStop[0] + ' stop:' + startStop[1], async function () {
            let { squintHost, squintViewers } = await createSession(2);

            let durationMs = 10;

            switch (startStop[0]) {
               case Source.Host:
                  squintHost.modelTimer.durationMs = durationMs;
                  squintHost.modelTimer.start();
                  break;
               case Source.Viewer1:
                  squintViewers[0].modelTimer.durationMs = durationMs;
                  squintViewers[0].modelTimer.start();
                  break;
               case Source.Viewer2:
                  squintViewers[1].modelTimer.durationMs = durationMs;
                  squintViewers[1].modelTimer.start();
                  break;
            }

            await sleep(durationMs + TimeMsTesting.Buffer);

            expect(squintHost.modelTimer.alarmSounding).to.be.true;
            expect(squintViewers[0].modelTimer.alarmSounding).to.be.true;
            expect(squintViewers[1].modelTimer.alarmSounding).to.be.true;

            switch (startStop[1]) {
               case Source.Host:
                  squintHost.modelTimer.reset();
                  break;
               case Source.Viewer1:
                  squintViewers[0].modelTimer.reset();
                  break;
               case Source.Viewer2:
                  squintViewers[1].modelTimer.reset();
                  break;
            }

            await sleep(TimeMsTesting.Buffer);

            expect(squintHost.modelTimer.alarmSounding).to.be.false;
            expect(squintViewers[0].modelTimer.alarmSounding).to.be.false;
            expect(squintViewers[1].modelTimer.alarmSounding).to.be.false;
         });
      });

      [
         [Source.Host, Source.Host],
         [Source.Host, Source.Viewer1],
         [Source.Host, Source.Viewer2],
         [Source.Viewer1, Source.Host],
         [Source.Viewer1, Source.Viewer1],
         [Source.Viewer1, Source.Viewer2],
         [Source.Viewer2, Source.Host],
         [Source.Viewer2, Source.Viewer1],
         [Source.Viewer2, Source.Viewer2],
      ].forEach((source: Source[]) => {

         it('should handle a durationMs value of zero. set duration:' + source[0] + ' start:' + source[1], async function () {
            let { squintHost, squintViewers } = await createSession(2);

            let durationMs = 0;

            switch (source[0]) {
               case Source.Host:
                  squintHost.modelTimer.durationMs = durationMs;
                  break;
               case Source.Viewer1:
                  squintViewers[0].modelTimer.durationMs = durationMs;
                  break;
               case Source.Viewer2:
                  squintViewers[1].modelTimer.durationMs = durationMs;
                  break;
            }

            // all synchronization events
            await sleep(TimeMsTesting.Buffer);

            expect(squintHost.modelTimer.alarmSounding).to.be.false;
            expect(squintViewers[0].modelTimer.alarmSounding).to.be.false;
            expect(squintViewers[1].modelTimer.alarmSounding).to.be.false;

            switch (source[1]) {
               case Source.Host:
                  squintHost.modelTimer.start();
                  break;
               case Source.Viewer1:
                  squintViewers[0].modelTimer.start();
                  break;
               case Source.Viewer2:
                  squintViewers[1].modelTimer.start();
                  break;
            }

            await sleep(TimeMsTesting.Buffer);

            expect(squintHost.modelTimer.alarmSounding).to.be.true;
            expect(squintViewers[0].modelTimer.alarmSounding).to.be.true;
            expect(squintViewers[1].modelTimer.alarmSounding).to.be.true;

            switch (source[0]) {
               case Source.Host:
                  squintHost.modelTimer.stopAlarm();
                  break;
               case Source.Viewer1:
                  squintViewers[0].modelTimer.stopAlarm();
                  break;
               case Source.Viewer2:
                  squintViewers[1].modelTimer.stopAlarm();
                  break;
            }
            await sleep(TimeMsTesting.Buffer);

            expect(squintHost.modelTimer.alarmSounding).to.be.false;
            expect(squintViewers[0].modelTimer.alarmSounding).to.be.false;
            expect(squintViewers[1].modelTimer.alarmSounding).to.be.false;
         });
      });

      [
         Source.Host,
         Source.Viewer1,
         Source.Viewer2
      ].forEach((source: Source) => {

         it('should sound all alarms at the same time. Started: ' + source, async function () {
            let { squintHost, squintViewers } = await createSession(2);

            let durationMs = 100;

            let sw = new Stopwatch();
            // TODO test fails if this line is uncommented. Make this a real test
            //squintHost.modelTimer.start();

            let promise = new Promise<void>((resolve, reject) => {
               [squintHost.modelTimer, squintViewers[0].modelTimer, squintViewers[1].modelTimer].forEach((timer) => {
                  timer.onAlarm = (sound: boolean) => {
                     try {
                        /*
                        if (timer === squintHost.modelTimer) console.info('squintHost.modelTimer ' + sw.elapsedMs);
                        if (timer === squintViewers[0].modelTimer) console.info('squintViewers[0].modelTimer ' + sw.elapsedMs);
                        if (timer === squintViewers[1].modelTimer) console.info('squintViewers[1].modelTimer ' + sw.elapsedMs);
                        */
                        expect(sound).to.be.true;
                        if (squintHost.modelTimer.alarmSounding && squintViewers[0].modelTimer.alarmSounding && squintViewers[1].modelTimer.alarmSounding) {
                           expect(sw.elapsedMs).to.be.greaterThan(durationMs);
                           expect(sw.elapsedMs).to.be.lessThan(2 * durationMs);
                           resolve();

                           squintHost.modelTimer.stopAlarm();
                           squintViewers[0].modelTimer.stopAlarm();
                           squintViewers[1].modelTimer.stopAlarm();
                        }
                     }
                     catch (err) {
                        reject(err);
                     }
                  };
               });
            })

            switch (source) {
               case Source.Host:
                  squintHost.modelTimer.durationMs = durationMs;
                  squintHost.modelTimer.start();
                  break;
               case Source.Viewer1:
                  squintViewers[0].modelTimer.durationMs = durationMs;
                  squintViewers[0].modelTimer.start();
                  break;
               case Source.Viewer2:
                  squintViewers[1].modelTimer.durationMs = durationMs;
                  squintViewers[1].modelTimer.start();
                  break;
            }

            return promise;
         });
      });


      it('an alarm timeout should not cause other alarms to stop', async function () {
      });

      it('should be able to synchronize to a stopped session', async function () {

         let { squintHost, sessionId } = await createSession();
         let squintViewer = await createSquint(TestUrlLocalhost, 'TestNewViewer')

         squintHost.modelTimer.durationMs = 345423;

         // let synch events pass before joining the session
         await sleep(TimeMsTesting.Buffer);

         await squintViewer.joinSession(sessionId);

         expect(Math.abs(squintHost.modelTimer.durationMs - squintViewer.modelTimer.durationMs)).to.be.lessThan(10);
         expect(squintHost.modelTimer.running).to.equal(squintViewer.modelTimer.running);

         squintHost.modelTimer.stop();
         squintViewer.modelTimer.stop();
      });


      it('should be able to synchronize to a running session', async function () {

         let { squintHost, sessionId } = await createSession();
         let squintViewer = await createSquint(TestUrlLocalhost, 'TestNewViewer')

         squintHost.modelTimer.durationMs = 345423;
         squintHost.modelTimer.start();

         // let synch events pass before joining the session
         await sleep(TimeMsTesting.Buffer);

         await squintViewer.joinSession(sessionId);

         expect(Math.abs(squintHost.modelTimer.durationMs - squintViewer.modelTimer.durationMs)).to.be.lessThan(10);
         expect(squintHost.modelTimer.running).to.equal(squintViewer.modelTimer.running);

         squintHost.modelTimer.stop();
         squintViewer.modelTimer.stop();
      });
   });


   // reset should stop the alarm
});
