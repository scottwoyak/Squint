/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { expect } from 'chai';
import { Squint } from '../src/Apps/Squint/Squint';
import { WebSocketReadyState } from '../src/Apps/Squint/WebSocketFactory';
import { SquintEvent } from '../src/Apps/Squint/SquintEvents';
import { env } from '../src/Util/Globals';
import { ConnectionState, SquintMessageSubject, ISquintMessage } from '../src/Apps/Squint/SquintMessage';
import { SquintSocket } from '../src/Apps/Squint/SquintSocket';
import { SquintStrings } from '../src/Apps/Squint/SquintStrings';
import { ReconnectAction } from './MockServer';
import { connectSquint, createMockServer, createSession, createSquint, expectConnection, sleep, squintAfterEach, squintBeforeEach, TimeMsTesting } from './util';
import { TestUrlLocalhost, TestUrlMock, imageBlob } from './Constants';
import { ITimerInfo } from '../src/Apps/Squint/ITimerInfo';

console.log('\n\n\n\n\n\n\n\n\n\n');
// dissable log so that the console just shows Mocha output
console.log = () => { };

env.isTesting = true;

describe('Squint', function () {

   beforeEach(async function () {
      return squintBeforeEach(this);
   });

   afterEach(async function () {
      return squintAfterEach(this);
   });

   const numTrials = 1;
   for (let test = 0; test < numTrials; test++) {
      describe('connect()', function () {

         it('should connect', async function () {

            // test
            let userName = 'Tester1';
            let squint = await createSquint(TestUrlLocalhost, userName);

            // check results
            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expectConnection(info.connections[0], squint);
            expect(info.sessions.length).to.equal(0);
         });

         it('should connect to a Mock server', async function () {

            let mockServer = createMockServer();
            expect(mockServer.connections.length).to.equal(0);

            let userName = 'Tester1';
            let squint = await createSquint(TestUrlMock, userName);
            expect(mockServer.connections.length).to.equal(1);

            return new Promise<void>((resolve, reject) => {
               squint.on({
                  event: SquintEvent.Close,
                  handler: () => {
                     try {
                        expect(mockServer.connections.length).to.equal(0);
                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               });

               mockServer.connections[0].close();
            })
         })

         it('server should close connection immediately on proper close', async function () {

            // test
            let userName = 'Tester1';
            let squint = await createSquint(TestUrlLocalhost, userName);

            // check results
            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expectConnection(info.connections[0], squint);
            expect(info.sessions.length).to.equal(0);

            // test passed
            squint.close();

            // check results
            await sleep(TimeMsTesting.Buffer); // sleep so that the socket closes first
            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(0);
            expect(info.sessions.length).to.equal(0);
         });

         it('client should reconnect if the websocket closes abnormally', async function () {

            let mockServer = createMockServer();
            mockServer.reconnectAction = ReconnectAction.Accept;

            // create a connection
            let userNameHost = 'TesterHost';
            let squint = await createSquint(TestUrlMock, userNameHost);
            expect(mockServer.connections.length).to.equal(1);

            // track events
            let closeCount = 0;
            let reconnectingCount = 0;
            let reconnectedTrueCount = 0;
            let reconnectedFalseCount = 0;
            squint.on({
               event: SquintEvent.Close,
               handler: () => closeCount++
            })
            squint.on({
               event: SquintEvent.Reconnecting,
               handler: () => reconnectingCount++
            })
            squint.on({
               event: SquintEvent.Reconnected,
               handler: (success: boolean) => success ? reconnectedTrueCount++ : reconnectedFalseCount++
            })

            // break the connection
            mockServer.connections[0].close(1005);

            // should reconnect
            return new Promise<void>((resolve, reject) => {
               setTimeout(() => {
                  try {
                     // should have reconnected by now
                     expect(mockServer.connectionAttempts).to.equal(1);
                     expect(mockServer.reconnectionAttempts).to.equal(1);
                     expect(reconnectingCount).to.equal(1);
                     expect(reconnectedTrueCount).to.equal(1);
                     expect(reconnectedFalseCount).to.equal(0);
                     expect(closeCount).to.equal(0);
                     resolve();
                  }
                  catch (err) {
                     reject(err);
                  }
               }, TimeMsTesting.Buffer);
            });
         });

         it('client should replace a connection if a reconnect request is made but the original socket is still open', async function () {

            let userNameHost = 'TesterHost';

            // create a connection
            let onMessage = () => { };
            let onImage = () => { };
            let onClose = () => { };
            let onInit = () => { };
            let ss = await SquintSocket.connect(TestUrlLocalhost, userNameHost, onMessage, onImage, onClose, onInit);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expect(info.connections[0].state).to.equal(ConnectionState.Open);
            expect(info.connections[0].connectionId).to.equal(ss.connectionId);
            let connectionId = ss.connectionId;

            // reconnect without breaking the old connection
            let ss2 = await SquintSocket.connect(TestUrlLocalhost, userNameHost, onMessage, onImage, onClose, onInit, connectionId);
            expect(ss2.connectionId).to.equal(connectionId);

            // should be back connected
            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expect(info.connections[0].connectionId).to.equal(connectionId);
            expect(info.connections[0].state).to.equal(ConnectionState.Open);
            expect(ss.readyState).to.equal(WebSocketReadyState.CLOSED);
            expect(ss2.readyState).to.equal(WebSocketReadyState.OPEN);

            ss2.close();

            /*
            let mockServer = createMockServer();
            mockServer.reconnectAction = ReconnectAction.Accept;

            // create a connection
            let userNameHost = 'TesterHost';
            let squint = await createSquint(TestUrlMock, userNameHost);
            expect(mockServer.connections.length).to.equal(1);

            // track events
            let closeCount = 0;
            let reconnectingCount = 0;
            let reconnectedTrueCount = 0;
            let reconnectedFalseCount = 0;
            squint.on({
               event: SquintEvent.Close,
               handler: () => closeCount++
            })
            squint.on({
               event: SquintEvent.Reconnecting,
               handler: () => reconnectingCount++
            })
            squint.on({
               event: SquintEvent.Reconnected,
               handler: (success: boolean) => success ? reconnectedTrueCount++ : reconnectedFalseCount++
            })

            // leave the original connection open, but reconnect with a new web socket
xxx
            return new Promise<void>((resolve, reject) => {
               setTimeout(() => {
                  try {
                     // should have reconnected by now
                     expect(mockServer.connectionAttempts).to.equal(1);
                     expect(mockServer.reconnectionAttempts).to.equal(1);
                     expect(reconnectingCount).to.equal(1);
                     expect(reconnectedTrueCount).to.equal(1);
                     expect(reconnectedFalseCount).to.equal(0);
                     expect(closeCount).to.equal(0);
                     resolve();
                  }
                  catch (err) {
                     reject(err);
                  }
               }, TimeMs.Buffer);
            });
            */
         });

         it('should try to reconnect multiple times before timing out', async function () {

            let mockServer = createMockServer();
            mockServer.reconnectAction = ReconnectAction.RejectAsFailed;

            // create a connection
            let userNameHost = 'TesterHost';
            let squint = await createSquint(TestUrlMock, userNameHost);
            expect(mockServer.connectionAttempts).to.equal(1);
            expect(mockServer.reconnectionAttempts).to.equal(0);
            expect(mockServer.connections.length).to.equal(1);

            // track events
            let closeCount = 0;
            let reconnectingCount = 0;
            let reconnectedTrueCount = 0;
            let reconnectedFalseCount = 0;
            squint.on({
               event: SquintEvent.Close,
               handler: () => closeCount++
            })
            squint.on({
               event: SquintEvent.Reconnecting,
               handler: () => reconnectingCount++
            })
            squint.on({
               event: SquintEvent.Reconnected,
               handler: (success: boolean) => success ? reconnectedTrueCount++ : reconnectedFalseCount++
            })

            // speed everything up
            let numTries = 4;
            squint.ReconnectRetryDelayS = 0.2;
            squint.ReconnectTimeoutS = (numTries - 0.5) * squint.ReconnectRetryDelayS;

            // break the connection
            mockServer.connections[0].close(1005);

            // should reconnect
            return new Promise<void>((resolve, reject) => {
               setTimeout(() => {
                  try {
                     // should have reconnected by now
                     expect(mockServer.connectionAttempts).to.equal(1);
                     expect(mockServer.reconnectionAttempts).to.equal(numTries);
                     expect(reconnectingCount).to.equal(1);
                     expect(reconnectedTrueCount).to.equal(0);
                     expect(reconnectedFalseCount).to.equal(1);
                     expect(closeCount).to.equal(1);
                     resolve();
                  }
                  catch (err) {
                     reject(err);
                  }
               }, 1000 * (1.5 * squint.ReconnectTimeoutS));
            });
         })

         it('should NOT try to reconnect multiple times if the connection has expired', async function () {

            let mockServer = createMockServer();
            mockServer.reconnectAction = ReconnectAction.RejectAsExpired;

            // create a connection
            let userNameHost = 'TesterHost';
            let squint = await createSquint(TestUrlMock, userNameHost);
            expect(mockServer.connectionAttempts).to.equal(1);
            expect(mockServer.reconnectionAttempts).to.equal(0);
            expect(mockServer.connections.length).to.equal(1);

            // track events
            let closeCount = 0;
            let reconnectingCount = 0;
            let reconnectedTrueCount = 0;
            let reconnectedFalseCount = 0;
            squint.on({
               event: SquintEvent.Close,
               handler: () => closeCount++
            })
            squint.on({
               event: SquintEvent.Reconnecting,
               handler: () => reconnectingCount++
            })
            squint.on({
               event: SquintEvent.Reconnected,
               handler: (success: boolean) => success ? reconnectedTrueCount++ : reconnectedFalseCount++
            })

            // speed everything up
            let numTries = 4;
            squint.ReconnectRetryDelayS = 0.2;
            squint.ReconnectTimeoutS = (numTries - 0.5) * squint.ReconnectRetryDelayS;

            // break the connection
            mockServer.connections[0].close(1005);

            // should reconnect
            return new Promise<void>((resolve, reject) => {
               setTimeout(() => {
                  try {
                     // should have reconnected by now
                     expect(mockServer.connectionAttempts).to.equal(1);
                     expect(mockServer.reconnectionAttempts).to.equal(1);
                     expect(reconnectingCount).to.equal(1);
                     expect(reconnectedTrueCount).to.equal(0);
                     expect(reconnectedFalseCount).to.equal(1);
                     expect(closeCount).to.equal(1);
                     resolve();
                  }
                  catch (err) {
                     reject(err);
                  }
               }, 1000 * (1.5 * squint.ReconnectTimeoutS));
            });
         })

         it('server connection should enter zombie mode if the websocket fails and then eventually fully close', async function () {

            let userNameHost = 'TesterHost';

            // create a connection
            let onMessage = () => { };
            let onImage = () => { };
            let onClose = () => { };
            let onInit = () => { };
            let ss = await SquintSocket.connect(TestUrlLocalhost, userNameHost, onMessage, onImage, onClose, onInit);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expect(info.connections[0].state).to.equal(ConnectionState.Open);

            // break the connection.
            ss.close(Squint.CLOSE_CODE_FAIL_RECONNECT);

            // should be in zombie mode
            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expect(info.connections[0].state).to.equal(ConnectionState.Zombie);

            // should fully close after the zombie timeout
            return new Promise<void>((resolve, reject) => {
               setTimeout(() => {
                  // should have reconnected by now
                  Squint.inspect(TestUrlLocalhost)
                     .then((info) => {

                        expect(info.connections.length).to.equal(0);

                        resolve();
                     })
                     .catch((err) => {
                        reject(err);
                     });
               }, TimeMsTesting.ZombieTimeout + TimeMsTesting.Buffer);
            });
         });

         it('server should allow clients to reconnect while in zombie mode', async function () {

            let userNameHost = 'TesterHost';

            // create a connection
            let onMessage = () => { };
            let onImage = () => { };
            let onClose = () => { };
            let onInit = () => { };
            let ss = await SquintSocket.connect(TestUrlLocalhost, userNameHost, onMessage, onImage, onClose, onInit);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expect(info.connections[0].state).to.equal(ConnectionState.Open);
            expect(info.connections[0].connectionId).to.equal(ss.connectionId);
            let connectionId = ss.connectionId;

            // break the connection.
            ss.close(Squint.CLOSE_CODE_FAIL_RECONNECT);

            // should be in zombie mode
            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expect(info.connections[0].connectionId).to.equal(connectionId);
            expect(info.connections[0].state).to.equal(ConnectionState.Zombie);

            let ss2 = await SquintSocket.connect(TestUrlLocalhost, userNameHost, onMessage, onImage, onClose, onInit, connectionId);
            expect(ss2.connectionId).to.equal(connectionId);

            // should be back connected
            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expect(info.connections[0].connectionId).to.equal(connectionId);
            expect(info.connections[0].state).to.equal(ConnectionState.Open);

            ss2.close();
         });

         it('server should reject reconnect attempts if the connection is fully closed', async function () {

            let userNameHost = 'TesterHost';

            // create a connection
            let onMessage = () => { };
            let onImage = () => { };
            let onClose = () => { };
            let onInit = () => { };
            let ss = await SquintSocket.connect(TestUrlLocalhost, userNameHost, onMessage, onImage, onClose, onInit);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expect(info.connections[0].state).to.equal(ConnectionState.Open);
            let connectionId = ss.connectionId;

            // break the connection.
            ss.close(Squint.CLOSE_CODE_FAIL_RECONNECT);

            // should be in zombie mode
            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expect(info.connections[0].state).to.equal(ConnectionState.Zombie);

            // try to reconnect after the Zombie timeout
            return new Promise<void>((resolve, reject) => {
               setTimeout(() => {
                  // should have reconnected by now
                  Squint.inspect(TestUrlLocalhost)
                     .then((info) => {

                        expect(info.connections.length).to.equal(0);

                        SquintSocket.connect(TestUrlLocalhost, userNameHost, onMessage, onImage, onClose, onInit, connectionId)
                           .then(() => {
                              reject('new connection unexpectantly created');
                           })
                           .catch((err) => {
                              resolve();
                           });
                     })
                     .catch((err) => {
                        reject(err);
                     });
               }, TimeMsTesting.ZombieTimeout + TimeMsTesting.Buffer);
            });
         });

         it('should allow multiple connections', async function () {

            // test
            let userName1 = 'Tester1';
            let userName2 = 'Tester2';
            let squint1 = await createSquint(TestUrlLocalhost, userName1);
            let squint2 = await createSquint(TestUrlLocalhost, userName2);

            // check results
            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(2);
            expectConnection(info.connections[0], squint1);
            expectConnection(info.connections[1], squint2);
            expect(info.sessions.length).to.equal(0);

            // test passed
            squint1.close();
            squint2.close();
         });

         it('should fail if the server does not exist', function (done) {

            this.timeout(5000);

            let squint = new Squint();
            squint.connect('wss://dummyhost.com', 'Tester1')
               .then(() => {
                  done('Expected connection to fail');
               })
               .catch((err) => {
                  done();
               });
         });

         it('should send reconnecting/reconnected events', async function () {

            let userNameHost = 'TesterHost';

            // both users are connected before the session starts
            let squint = await createSquint(TestUrlLocalhost, userNameHost);
            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expect(info.connections[0].state).to.equal(ConnectionState.Open);

            return new Promise<void>((resolve, reject) => {

               let disconnectedEvent = false;
               squint.on({
                  event: SquintEvent.Reconnecting,
                  handler: () => {
                     try {
                        expect(reconnectedEvent).to.be.false;
                        disconnectedEvent = true;
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               });

               let reconnectedEvent = false;
               squint.on({
                  event: SquintEvent.Reconnected,
                  handler: () => {
                     try {
                        expect(disconnectedEvent).to.be.true;
                        reconnectedEvent = true;
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               });

               // break the connection
               squint.ws.close(Squint.CLOSE_CODE_FAIL_RECONNECT);

               setTimeout(() => {
                  // should have reconnected by now
                  Squint.inspect(TestUrlLocalhost)
                     .then((info) => {

                        expect(info.connections.length).to.equal(1);
                        expect(info.connections[0].state).to.equal(ConnectionState.Open);

                        expect(reconnectedEvent).to.be.true;
                        expect(disconnectedEvent).to.be.true;

                        resolve();
                     })
                     .catch((err) => {
                        reject(err);
                     });
               }, TimeMsTesting.Buffer);
            });
         });

         it('should queue server events that are sent while disconnected', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer = 'TesterViewer';

            // both users are connected before the session starts
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            let chat: string[] = [];
            let onMessage = (msg: ISquintMessage) => {
               if (msg.subject === SquintMessageSubject.ChatMessage) {
                  chat.push(msg.message);
               }
            };
            let onImage = () => { };
            let onClose = () => { };
            let onInit = () => { };
            let ss = await SquintSocket.connect(TestUrlLocalhost, userNameViewer, onMessage, onImage, onClose, onInit);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(2);
            expect(info.connections[0].state).to.equal(ConnectionState.Open);

            // start and join a session
            let sessionId = await squintHost.createSession();

            info = await Squint.inspect(TestUrlLocalhost);
            ss.send({
               subject: SquintMessageSubject.JoinSession,
               requestId: 'not needed',
               sessionId
            })

            // break the connection
            ss.ws.close(Squint.CLOSE_CODE_FAIL_RECONNECT);
            await sleep(25); // must be less than zombie timeout

            // make sure the connection is in zombie mode
            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(2);
            expect(info.connections[1].state).to.equal(ConnectionState.Zombie);

            // send some chat messages
            squintHost.sendChatMessage('one');
            squintHost.sendChatMessage('two');

            // even after a little time the chat messages should not be received
            await sleep(25);
            expect(chat.length).to.equal(0);

            // reconnect
            ss = await SquintSocket.connect(TestUrlLocalhost, userNameViewer, onMessage, onImage, onClose, onInit, ss.connectionId);

            await sleep(TimeMsTesting.Buffer);
            expect(chat.length).to.equal(2);
            expect(chat[0]).to.equal('one');
            expect(chat[1]).to.equal('two');

            ss.close();
         });

         /*
         it.only('should queue client events that are sent while disconnected', async function () {
         });
      */
      });

      describe('session list', function () {

         it('should immediately send a SessionList upon connecting', async function () {

            // create a connection
            let userNameViewer = 'TesterViewer';
            let squintViewer = new Squint();

            // wait for the initial session list
            let promise = new Promise<void>((resolve, reject) => {
               squintViewer.on({
                  event: SquintEvent.SessionList,
                  handler: (sessions) => {

                     try {
                        expect(sessions.length).to.equal(0);

                        // success!
                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               });
            });

            await connectSquint(squintViewer, TestUrlLocalhost, userNameViewer);
            return promise;
         });

         it('should notify connections of sessions (viewer connects before session is started)', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer = 'TesterViewer';

            // both users are connected before the session starts
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);
            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(2);
            expectConnection(info.connections[0], squintHost);
            expectConnection(info.connections[1], squintViewer);
            expect(info.sessions.length).to.equal(0);

            // as soon as squintHost sends an image, a session will be started and we'll
            // be notified about it. Join the session.
            let promise = new Promise<void>((resolve, reject) => {
               squintViewer.on({
                  event: SquintEvent.SessionList,
                  handler: async (sessions) => {

                     try {
                        expect(sessions.length).to.equal(1);
                        expect(sessions[0].title).to.equal(squintHost.userName);

                        let info = await Squint.inspect(TestUrlLocalhost);
                        expect(info.sessions.length).to.equal(1);
                        expect(info.sessions[0].sessionId).to.equal(sessions[0].sessionId);
                        expect(info.sessions[0].title).to.equal(squintHost.userName);
                        expect(info.sessions[0].viewers.length).to.equal(0);
                        expectConnection(info.sessions[0].host, squintHost);

                        // success!
                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               });
            });

            // start a session
            await squintHost.createSession();

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].title).to.equal(squintHost.userName);
            expect(info.sessions[0].viewers.length).to.equal(0);
            expectConnection(info.sessions[0].host, squintHost);

            return promise;
         });

         it('should notify connections of sessions (viewer connects after session is started)', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer = 'TesterViewer';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expectConnection(info.connections[0], squintHost);
            expect(info.sessions.length).to.equal(0);

            // create the session
            await squintHost.createSession();

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].title).to.equal(squintHost.userName);
            expect(info.sessions[0].viewers.length).to.equal(0);
            expectConnection(info.sessions[0].host, squintHost);

            // let the initial notification associated with the session creation pass
            await sleep(TimeMsTesting.Interval);

            // add the second connection
            let squintViewer = new Squint();

            // We should immediately receive the session list
            let promise = new Promise<void>((resolve, reject) => {

               squintViewer.on({
                  event: SquintEvent.SessionList,
                  handler: async (sessions) => {

                     try {
                        expect(sessions.length).to.equal(1);
                        expect(sessions[0].title).to.equal(squintHost.userName);

                        let info = await Squint.inspect(TestUrlLocalhost);
                        expect(info.sessions.length).to.equal(1);
                        expect(info.sessions[0].sessionId).to.equal(sessions[0].sessionId);
                        expect(info.sessions[0].title).to.equal(squintHost.userName);
                        expect(info.sessions[0].viewers.length).to.equal(0);
                        expectConnection(info.sessions[0].host, squintHost);

                        // success!
                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               });
            });

            await connectSquint(squintViewer, TestUrlLocalhost, userNameViewer);

            return promise;
         });

         it('should notify connections of sessions ending', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer = 'TesterViewer';

            // both users are connected before the session starts
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);
            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(2);
            expectConnection(info.connections[0], squintHost);
            expectConnection(info.connections[1], squintViewer);
            expect(info.sessions.length).to.equal(0);

            let pass = 1;
            let promise = new Promise<void>((resolve, reject) => {
               squintViewer.on({
                  event: SquintEvent.SessionList,
                  handler: async (sessions) => {

                     try {
                        // should receive multiple notifications
                        // 1 - when the session is created due to the host uploading an image
                        // 2 - when the host closes
                        if (pass === 1) {
                           expect(sessions.length).to.equal(1);
                           expect(sessions[0].title).to.equal(squintHost.userName);

                           let info = await Squint.inspect(TestUrlLocalhost);
                           expect(info.sessions.length).to.equal(1);
                           expect(info.sessions[0].sessionId).to.equal(sessions[0].sessionId);
                           expect(info.sessions[0].title).to.equal(squintHost.userName);
                           expect(info.sessions[0].viewers.length).to.equal(0);
                           expectConnection(info.sessions[0].host, squintHost);
                        }
                        else if (pass === 2) {
                           expect(sessions.length).to.equal(0);

                           let info = await Squint.inspect(TestUrlLocalhost);
                           expect(info.sessions.length).to.equal(0);

                           // success!
                           resolve();
                        }
                        else {
                           reject();
                        }

                        pass++;
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               });
            });

            // start a session
            await squintHost.createSession();

            // sleep to allow Pass 1
            await sleep(TimeMsTesting.Interval + TimeMsTesting.Buffer);

            // this should cause Pass 2
            squintHost.close();

            return promise;
         });
      });

      describe('Sessions', function () {

         it('should create a session', async function () {

            let userNameHost = 'TesterHost';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expectConnection(info.connections[0], squintHost);
            expect(info.sessions.length).to.equal(0);

            // create the session
            await squintHost.createSession();

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].title).to.equal(squintHost.userName);
            expect(info.sessions[0].viewers.length).to.equal(0);
            expectConnection(info.sessions[0].host, squintHost);
         });

         it('should create a session with a title', async function () {

            let userNameHost = 'TesterHost';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expectConnection(info.connections[0], squintHost);
            expect(info.sessions.length).to.equal(0);

            // create the session
            let sessionTitle = 'XXX';
            await squintHost.createSession(sessionTitle);

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].title).to.equal(sessionTitle);
            expect(info.sessions[0].viewers.length).to.equal(0);
            expectConnection(info.sessions[0].host, squintHost);
         });

         it('session should stay alive if the host closes but a listener still exists', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer = 'TesterViewer';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            // create the session
            let sessionId = await squintHost.createSession();

            // add the second connection
            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);
            await squintViewer.joinSession(sessionId);

            // close the host - session should stay alive since we have a listener
            squintHost.close();

            await sleep(TimeMsTesting.Buffer); // sleep so that the socket closes first
            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expectConnection(info.connections[0], squintViewer);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].viewers.length).to.equal(1);
            expectConnection(info.sessions[0].viewers[0], squintViewer);

            // now wait and the session should close automatically
            return new Promise<void>((resolve, reject) => {
               setTimeout(() => {
                  Squint.inspect(TestUrlLocalhost)
                     .then((info) => {
                        expect(info.connections.length).to.equal(0);
                        expect(info.sessions.length).to.equal(0);
                        resolve();
                     })
                     .catch((err) => {
                        reject(err);
                     });

               }, TimeMsTesting.SessionTimeout + TimeMsTesting.Buffer);
            })
         });

         it('session should close immediately if the host closes with no listeners', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer = 'TesterViewer';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            // create the session
            await squintHost.createSession();

            // add the second connection
            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);

            // close the host - session should stay alive since we have a listener
            squintHost.close();

            await sleep(TimeMsTesting.Buffer); // sleep so that the socket closes first
            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expectConnection(info.connections[0], squintViewer);
            expect(info.sessions.length).to.equal(0);
         });

         it('session should close immediately if the last listener closes while in timeout mode', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer = 'TesterViewer';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            // create the session
            let sessionId = await squintHost.createSession();

            // add the second connection
            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);
            await squintViewer.joinSession(sessionId);

            // close the host - session should stay alive since we have a listener
            squintHost.close();

            // prove session is still open
            await sleep(TimeMsTesting.Buffer); // sleep so that the socket closes first
            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expectConnection(info.connections[0], squintViewer);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].viewers.length).to.equal(1);
            expectConnection(info.sessions[0].viewers[0], squintViewer);

            // now close the listener
            squintViewer.close();

            // session should close
            await sleep(TimeMsTesting.Buffer); // sleep so that the socket closes first
            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(0);
            expect(info.sessions.length).to.equal(0);
         });

         it('session listeners should receive a HostDisconnected message if the host is closed normally', async function () {

            let { squintHost, squintViewer } = await createSession();

            let promise = new Promise<void>((resolve, reject) => {
               squintViewer.on({
                  event: SquintEvent.HostDisconnected,
                  handler: () => {
                     resolve();
                  }
               })
            });

            // close the host
            squintHost.close();

            await sleep(TimeMsTesting.Buffer); // sleep so that the socket closes first
            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expect(info.sessions.length).to.equal(1);

            return promise;
         });

         it('session listeners should receive a HostDisconnected message if the host is closed abnormally and does not reconnect', async function () {

            let { squintHost, squintViewer } = await createSession();

            let promise = new Promise<void>((resolve, reject) => {
               squintViewer.on({
                  event: SquintEvent.HostDisconnected,
                  handler: () => {
                     resolve();
                  }
               })
            });

            // close the host
            squintHost.ws.close(Squint.CLOSE_CODE_FAIL_NO_RECONNECT);

            await sleep(TimeMsTesting.ZombieTimeout + TimeMsTesting.Buffer); // sleep so that the socket closes first

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expect(info.sessions.length).to.equal(1);

            return promise;
         });

         it('session listeners should NOT receive a HostDisconnected message if the host closes abnormally but then reconnects', async function () {

            let { squintHost, squintViewer } = await createSession();

            let disconnectedEvent = false;
            squintViewer.on({
               event: SquintEvent.HostDisconnected,
               handler: () => {
                  disconnectedEvent = true;
               }
            });

            // close the host - will reconnect
            squintHost.ws.close(Squint.CLOSE_CODE_FAIL_RECONNECT);

            // sleep long enough to assure the zombie mode times out if it does
            await sleep(TimeMsTesting.ZombieTimeout + TimeMsTesting.Buffer);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(2);
            expect(info.sessions.length).to.equal(1);
            expect(disconnectedEvent).to.be.false;
         });

         it('session listeners should receive a HostChanged message if the host changes', async function () {

            let { squintHost, squintViewer, sessionId } = await createSession();

            // create the second host and join the session
            let squintHost2 = await createSquint(TestUrlLocalhost, 'TesterHost2');
            await squintHost2.joinSession(sessionId);
            await sleep(TimeMsTesting.Interval + TimeMsTesting.Buffer); // let the existing SessionList events pass

            let squintHostCount = 0;
            let squintHost2Count = 0;
            let squintViewerCount = 0;

            squintHost.on({
               event: SquintEvent.HostChanged,
               handler: () => {
                  squintHostCount++;
               }
            });
            squintHost2.on({
               event: SquintEvent.HostChanged,
               handler: () => {
                  squintHost2Count++;
               }
            });
            squintViewer.on({
               event: SquintEvent.HostChanged,
               handler: () => {
                  squintViewerCount++;
               }
            });

            // become the host
            squintHost2.requestToBeHost();

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(3);
            expectConnection(info.connections[0], squintHost);
            expectConnection(info.connections[1], squintViewer);
            expectConnection(info.connections[2], squintHost2);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].viewers.length).to.equal(2);
            expectConnection(info.sessions[0].viewers[0], squintViewer);
            expectConnection(info.sessions[0].viewers[1], squintHost);

            expect(squintViewerCount).to.equal(1);
            expect(squintHostCount).to.equal(1);
            expect(squintHost2Count).to.equal(1);
         });

         it('session listeners should receive a SessionInfo message if the host is changed', async function () {

            let { squintHost, squintViewer, sessionId } = await createSession();

            // create the second host and join the session
            let squintHost2 = await createSquint(TestUrlLocalhost, 'TesterHost2');
            await squintHost2.joinSession(sessionId);

            await sleep(TimeMsTesting.Interval + TimeMsTesting.Buffer); // let the existing SessionList events pass

            let squintHostCount = 0;
            let squintHost2Count = 0;
            let squintViewerCount = 0;

            squintHost.on({
               event: SquintEvent.SessionInfo,
               handler: () => {
                  squintHostCount++;
               }
            });
            squintHost2.on({
               event: SquintEvent.SessionInfo,
               handler: () => {
                  squintHost2Count++;
               }
            });
            squintViewer.on({
               event: SquintEvent.SessionInfo,
               handler: () => {
                  squintViewerCount++;
               }
            });

            // become the host
            squintHost2.requestToBeHost();

            // allow events to fire
            await sleep(TimeMsTesting.SessionTimeout + TimeMsTesting.Buffer);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(3);
            expectConnection(info.connections[0], squintHost);
            expectConnection(info.connections[1], squintViewer);
            expectConnection(info.connections[2], squintHost2);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].viewers.length).to.equal(2);
            expectConnection(info.sessions[0].viewers[0], squintViewer);
            expectConnection(info.sessions[0].viewers[1], squintHost);
            expectConnection(info.sessions[0].host, squintHost2);

            expect(squintViewerCount).to.equal(1);
            expect(squintHostCount).to.equal(1);
            expect(squintHost2Count).to.equal(1);
         });

         it('session listeners should receive a SessionInfo message if a host-less session gains a host', async function () {

            let { squintHost, squintViewer, sessionId } = await createSession();

            // create the second host and join the session
            let squintHost2 = await createSquint(TestUrlLocalhost, 'TesterHost2');
            await squintHost2.joinSession(sessionId);

            // disconnect the current host
            squintHost.close();

            // allow events to fire
            await sleep(TimeMsTesting.Interval + TimeMsTesting.Buffer);

            let squintHostCount = 0;
            let squintHost2Count = 0;
            let squintViewerCount = 0;

            squintHost.on({
               event: SquintEvent.SessionInfo,
               handler: () => {
                  squintHostCount++;
               }
            });
            squintHost2.on({
               event: SquintEvent.SessionInfo,
               handler: () => {
                  squintHost2Count++;
               }
            });
            squintViewer.on({
               event: SquintEvent.SessionInfo,
               handler: () => {
                  squintViewerCount++;
               }
            });

            // become the host
            squintHost2.requestToBeHost();

            // allow events to fire
            await sleep(TimeMsTesting.Interval + TimeMsTesting.Buffer);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(2);
            expectConnection(info.connections[0], squintViewer);
            expectConnection(info.connections[1], squintHost2);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].viewers.length).to.equal(1);
            expectConnection(info.sessions[0].viewers[0], squintViewer);
            expectConnection(info.sessions[0].host, squintHost2);

            expect(squintViewerCount).to.equal(1);
            expect(squintHostCount).to.equal(0);
            expect(squintHost2Count).to.equal(1);
         });

         it('session listeners should receive a SessionInfo message when the host closes', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer = 'TesterViewer';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            // create the session
            let sessionId = await squintHost.createSession();

            // add the second connection
            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);
            await squintViewer.joinSession(sessionId);

            let promise = new Promise<void>((resolve, reject) => {
               let pass = 1;
               squintViewer.on({
                  event: SquintEvent.SessionInfo,
                  handler: (sessionInfo) => {

                     try {
                        if (pass === 1) {
                           expectConnection(sessionInfo.host, squintHost);
                           expect(sessionInfo.viewers.length).to.equal(1);
                           expectConnection(sessionInfo.viewers[0], squintViewer);
                        }
                        else if (pass === 2) {
                           expect(sessionInfo.host).to.be.undefined;
                           expect(sessionInfo.viewers.length).to.equal(1);
                           expectConnection(sessionInfo.viewers[0], squintViewer);

                           resolve();
                        }
                        else {
                           reject('extra SessionInfo event received');
                        }

                        pass++;
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               })
            });

            // sleep long enough that the initial message associated with the
            // subscription activity is sent
            await sleep(TimeMsTesting.Interval + TimeMsTesting.Buffer);

            // close the host - should trigger Pass 2
            squintHost.close();

            await sleep(TimeMsTesting.Buffer); // sleep so that the socket closes first
            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expect(info.sessions.length).to.equal(1);

            return promise;
         });

         it('session listeners should still receive SessionInfo messages after the host has closed', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer1 = 'TesterViewer1';
            let userNameViewer2 = 'TesterViewer1';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            // create the session
            let sessionId = await squintHost.createSession();

            // add the other connections
            let squintViewer1 = await createSquint(TestUrlLocalhost, userNameViewer1);
            await squintViewer1.joinSession(sessionId);
            let squintViewer2 = await createSquint(TestUrlLocalhost, userNameViewer2);
            await squintViewer2.joinSession(sessionId);

            // close the host - session should stay alive since we have a listener
            squintHost.close();

            // let the close call occur before we inspect
            await sleep(TimeMsTesting.Buffer);

            // prove session is still open
            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(2);
            expectConnection(info.connections[0], squintViewer1);
            expectConnection(info.connections[1], squintViewer2);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].viewers.length).to.equal(2);
            expectConnection(info.sessions[0].viewers[0], squintViewer1);
            expectConnection(info.sessions[0].viewers[1], squintViewer2);

            await sleep(TimeMsTesting.Interval + TimeMsTesting.Buffer);

            // viewer 2 should receive a message when viewer 1 closes
            let promise = new Promise<void>((resolve, reject) => {
               squintViewer2.on({
                  event: SquintEvent.SessionInfo,
                  handler: (sessionInfo) => {
                     try {
                        expect(sessionInfo.host).to.be.undefined;
                        expect(sessionInfo.viewers.length).to.equal(1);
                        expectConnection(sessionInfo.viewers[0], squintViewer2);

                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               })
            });

            // close the listener to trigger the SessionInfo message
            squintViewer1.close();

            return promise;
         });

         it('sessions should allow the host to change', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer = 'TesterViewer';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expectConnection(info.connections[0], squintHost);
            expect(info.sessions.length).to.equal(0);

            // create the session
            let sessionId = await squintHost.createSession();

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].sessionId).to.equal(sessionId);
            expect(info.sessions[0].title).to.equal(squintHost.userName);
            expect(info.sessions[0].viewers.length).to.equal(0);
            expectConnection(info.sessions[0].host, squintHost);

            // add the second connection
            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);
            await squintViewer.joinSession(sessionId);

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(2);
            expectConnection(info.connections[0], squintHost);
            expectConnection(info.connections[1], squintViewer);
            expect(info.sessions.length).to.equal(1);
            expectConnection(info.sessions[0].host, squintHost);
            expect(info.sessions[0].title).to.equal(squintHost.userName);
            expect(info.sessions[0].viewers.length).to.equal(1);
            expectConnection(info.sessions[0].viewers[0], squintViewer);

            // change the host
            let promise1 = new Promise<void>((resolve, reject) => {
               squintHost.on({
                  event: SquintEvent.HostChanged,
                  handler: (newHostConnectionId: string) => {
                     try {
                        expect(newHostConnectionId).to.equal(squintViewer.connectionId);
                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               });
            });
            let promise2 = new Promise<void>((resolve, reject) => {
               squintViewer.on({
                  event: SquintEvent.HostChanged,
                  handler: (newHostConnectionId: string) => {
                     try {
                        expect(newHostConnectionId).to.equal(squintViewer.connectionId);
                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               });
            });

            squintViewer.requestToBeHost();

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(2);
            expectConnection(info.connections[0], squintHost);
            expectConnection(info.connections[1], squintViewer);
            expect(info.sessions.length).to.equal(1);
            expectConnection(info.sessions[0].host, squintViewer);
            expect(info.sessions[0].title).to.equal(squintHost.userName); // note the title is still the host's name
            expect(info.sessions[0].viewers.length).to.equal(1);
            expectConnection(info.sessions[0].viewers[0], squintHost);

            return Promise.all([promise1, promise2]);
         });

         it('should notify session listeners & host if the host changes name', async function () {

            let { squintHost, squintViewer } = await createSession();
            let squintOther = await createSquint(TestUrlLocalhost, 'TesterOther');

            // clear out the initial event
            await sleep(TimeMsTesting.Interval + TimeMsTesting.Buffer);

            let newName = 'TesterNewName';

            let promises: Promise<void>[] = [];
            promises.push(
               new Promise<void>((resolve, reject) => {
                  squintHost.on({
                     event: SquintEvent.ConnectionInfoUpdate,
                     handler: (info) => {
                        try {
                           expect(info.userName).to.equal(newName);
                           resolve();
                        }
                        catch (err) {
                           reject(err);
                        }
                     }
                  });
               })
            );
            promises.push(
               new Promise<void>((resolve, reject) => {
                  squintViewer.on({
                     event: SquintEvent.ConnectionInfoUpdate,
                     handler: (info) => {
                        try {
                           expect(info.userName).to.equal(newName);
                           resolve();
                        }
                        catch (err) {
                           reject(err);
                        }
                     }
                  });
               })
            );
            promises.push(
               new Promise<void>((resolve, reject) => {
                  squintOther.on({
                     event: SquintEvent.ConnectionInfoUpdate,
                     handler: () => {
                        reject('Non session connections should not receive the message');
                     }
                  });

                  sleep(TimeMsTesting.Buffer)
                     .then(() => {
                        resolve();
                     })
                     .catch((err) => {
                        reject(err);
                     });
               })
            );

            // change name
            squintHost.userName = newName;

            return Promise.all(promises);
         });

         it('should notify session listeners & host if a listener changes name', async function () {

            let { squintHost, squintViewer } = await createSession();
            let squintOther = await createSquint(TestUrlLocalhost, 'TesterOther');

            // clear out the initial event
            await sleep(TimeMsTesting.Interval + TimeMsTesting.Buffer);

            let newName = 'TesterNewName';

            let promises: Promise<void>[] = [];
            promises.push(
               new Promise<void>((resolve, reject) => {
                  squintHost.on({
                     event: SquintEvent.ConnectionInfoUpdate,
                     handler: (info) => {
                        try {
                           expect(info.userName).to.equal(newName);
                           resolve();
                        }
                        catch (err) {
                           reject(err);
                        }
                     }
                  });
               })
            );
            promises.push(
               new Promise<void>((resolve, reject) => {
                  squintViewer.on({
                     event: SquintEvent.ConnectionInfoUpdate,
                     handler: (info) => {
                        try {
                           expect(info.userName).to.equal(newName);
                           resolve();
                        }
                        catch (err) {
                           reject(err);
                        }
                     }
                  });
               })
            );
            promises.push(
               new Promise<void>((resolve, reject) => {
                  squintOther.on({
                     event: SquintEvent.ConnectionInfoUpdate,
                     handler: () => {
                        reject('Non session connections should not receive the message');
                     }
                  });

                  sleep(TimeMsTesting.Buffer)
                     .then(() => {
                        resolve();
                     })
                     .catch((err) => {
                        reject(err);
                     });
               })
            );

            // change name
            squintViewer.userName = newName;

            return Promise.all(promises);
         });

         it('should NOT create a session if already hosting a session', async function () {

            let { squintHost, squintViewer } = await createSession();

            let promise = new Promise<void>((resolve, reject) => {
               squintHost.createSession()
                  .then(() => {
                     reject('expected create session to fail');
                  })
                  .catch((err) => {
                     try {
                        expect(err).to.equal(SquintStrings.CANNOT_CREATE_SESSION__IN_SESSION);
                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  });
            });

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(2);
            expectConnection(info.connections[0], squintHost);
            expectConnection(info.connections[1], squintViewer);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].viewers.length).to.equal(1);
            expectConnection(info.sessions[0].host, squintHost);
            expectConnection(info.sessions[0].viewers[0], squintViewer);

            return promise;
         });

         it('should NOT create a session if already a member of a session', async function () {

            let { squintHost, squintViewer } = await createSession();

            let promise = new Promise<void>((resolve, reject) => {
               squintViewer.createSession()
                  .then(() => {
                     reject('expected create session to fail');
                  })
                  .catch((err) => {
                     try {
                        expect(err).to.equal(SquintStrings.CANNOT_CREATE_SESSION__IN_SESSION);
                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  });
            });

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(2);
            expectConnection(info.connections[0], squintHost);
            expectConnection(info.connections[1], squintViewer);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].viewers.length).to.equal(1);
            expectConnection(info.sessions[0].host, squintHost);
            expectConnection(info.sessions[0].viewers[0], squintViewer);

            return promise;
         });

         /*
         // TODO can't get this one to work. If often creates the session before
         // timing out even with 0 delay
         it('should allow create requests to time out', async function () {

            let userNameHost = 'TesterHost';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            return new Promise<void>((resolve, reject) => {

               // try to join to the other host
               squintHost.createSession('MySession', 0)
                  .then(() => {
                     reject('create should have failed')
                  })
                  .catch((err) => {
                     try {
                        expect(err).to.equal(SquintStrings.CANNOT_CREATE_SESSION__TIMEOUT)
                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  });
            });
         });
         */

         it('should NOT join if already a member of a session', async function () {

            let userNameHost1 = 'TesterHost1';
            let userNameHost2 = 'TesterHost2';
            let userNameViewer = 'TesterViewer';
            let squintHost1 = await createSquint(TestUrlLocalhost, userNameHost1);
            let squintHost2 = await createSquint(TestUrlLocalhost, userNameHost2);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(2);
            expectConnection(info.connections[0], squintHost1);
            expectConnection(info.connections[1], squintHost2);
            expect(info.sessions.length).to.equal(0);

            // create the sessions
            let sessionId1 = await squintHost1.createSession();
            let sessionId2 = await squintHost2.createSession();

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.sessions.length).to.equal(2);
            expect(info.sessions[0].title).to.equal(squintHost1.userName);
            expect(info.sessions[0].viewers.length).to.equal(0);
            expectConnection(info.sessions[0].host, squintHost1);
            expect(info.sessions[1].title).to.equal(squintHost2.userName);
            expectConnection(info.sessions[1].host, squintHost2);
            expect(info.sessions[1].viewers.length).to.equal(0);

            // add the viewer connection
            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);
            await squintViewer.joinSession(sessionId1);

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(3);
            expect(info.sessions.length).to.equal(2);
            expect(info.sessions[0].viewers.length).to.equal(1);
            expect(info.sessions[1].viewers.length).to.equal(0);

            return new Promise<void>((resolve, reject) => {

               // try to join to the other host
               squintViewer.joinSession(sessionId2)
                  .then(() => {
                     reject('join should have failed')
                  })
                  .catch(async (err) => {
                     try {
                        expect(err).to.equal(SquintStrings.CANNOT_JOIN_SESSION__IN_SESSION)

                        info = await Squint.inspect(TestUrlLocalhost);
                        expect(info.connections.length).to.equal(3);
                        expect(info.sessions.length).to.equal(2);
                        expect(info.sessions[0].viewers.length).to.equal(1);
                        expect(info.sessions[1].viewers.length).to.equal(0);

                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  });
            });
         });

         it('should NOT join if hosting', async function () {

            let userNameHost1 = 'TesterHost1';
            let userNameHost2 = 'TesterHost2';
            let userNameViewer = 'TesterViewer';
            let squintHost1 = await createSquint(TestUrlLocalhost, userNameHost1);
            let squintHost2 = await createSquint(TestUrlLocalhost, userNameHost2);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(2);
            expectConnection(info.connections[0], squintHost1);
            expectConnection(info.connections[1], squintHost2);
            expect(info.sessions.length).to.equal(0);

            // create the sessions
            let sessionId1 = await squintHost1.createSession();
            let sessionId2 = await squintHost2.createSession();

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.sessions.length).to.equal(2);
            expect(info.sessions[0].title).to.equal(squintHost1.userName);
            expect(info.sessions[0].viewers.length).to.equal(0);
            expectConnection(info.sessions[0].host, squintHost1);
            expect(info.sessions[1].title).to.equal(squintHost2.userName);
            expect(info.sessions[1].viewers.length).to.equal(0);
            expectConnection(info.sessions[1].host, squintHost2);

            // add the viewer connection
            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);
            await squintViewer.joinSession(sessionId1);

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(3);
            expect(info.sessions.length).to.equal(2);
            expect(info.sessions[0].viewers.length).to.equal(1);
            expect(info.sessions[1].viewers.length).to.equal(0);

            return new Promise<void>((resolve, reject) => {

               // try to join to the other host
               squintHost1.joinSession(sessionId2)
                  .then(() => {
                     reject('join should have failed')
                  })
                  .catch(async (err) => {
                     try {
                        expect(err).to.equal(SquintStrings.CANNOT_JOIN_SESSION__IN_SESSION)

                        info = await Squint.inspect(TestUrlLocalhost);
                        expect(info.connections.length).to.equal(3);
                        expect(info.sessions.length).to.equal(2);
                        expect(info.sessions[0].viewers.length).to.equal(1);
                        expect(info.sessions[1].viewers.length).to.equal(0);

                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  });
            });
         });

         /*
         // TODO can't get this one to work. If often creates the session before
         // timing out even with 0 delay
         it('should allow join requests to time out', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer = 'TesterViewer';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            // create the session
            let sessionId = await squintHost.createSession();

            // add the viewer connection
            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);

            return new Promise<void>((resolve, reject) => {

               // try to join to the other host
               squintViewer.join(sessionId, 0)
                  .then(() => {
                     reject('join should have failed')
                  })
                  .catch(async (err) => {
                     try {
                        expect(err).to.equal(SquintStrings.CANNOT_JOIN_SESSION__TIMEOUT)

                        let info = await Squint.inspect(TestUrlLocalhost);
                        expect(info.connections.length).to.equal(2);
                        expect(info.sessions.length).to.equal(1);

                        // tricky issue here. The request may actually be processed
                        // by the server at some point after we've stopped waiting for
                        // it. What to do then?
                        //expect(info.sessions[0].viewers.length).to.equal(0);

                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  });
            });
         });
         */

         it('should NOT join if session does not exist', async function () {

            let userNameViewer = 'TesterViewer';

            // add the viewer connection
            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);

            return new Promise<void>((resolve, reject) => {

               // try to join to the other host
               squintViewer.joinSession('InvalidID')
                  .then(() => {
                     reject('join should have failed')
                  })
                  .catch(async (err) => {
                     try {
                        expect(err).to.equal(SquintStrings.CANNOT_JOIN_SESSION__SESSION_NOT_FOUND)

                        let info = await Squint.inspect(TestUrlLocalhost);
                        expect(info.connections.length).to.equal(1);
                        expect(info.sessions.length).to.equal(0);

                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  });
            });
         });

         it('should notify session members as viewers join and leave (normally)', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer1 = 'TesterViewer1';
            let userNameViewer2 = 'TesterViewer2';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expectConnection(info.connections[0], squintHost);
            expect(info.sessions.length).to.equal(0);

            // create the session
            let sessionId = await squintHost.createSession();

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].title).to.equal(squintHost.userName);
            expect(info.sessions[0].viewers.length).to.equal(0);
            expectConnection(info.sessions[0].host, squintHost);

            // add the other connections
            let squintViewer1 = await createSquint(TestUrlLocalhost, userNameViewer1);
            let squintViewer2 = await createSquint(TestUrlLocalhost, userNameViewer2);

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(3);
            expectConnection(info.connections[0], squintHost);
            expectConnection(info.connections[1], squintViewer1);
            expectConnection(info.connections[2], squintViewer2);
            expect(info.sessions.length).to.equal(1);

            let promise = new Promise<void>((resolve, reject) => {

               let pass = 1;
               squintViewer1.on({
                  event: SquintEvent.SessionInfo,
                  handler: async (sessionInfo) => {

                     try {
                        // should receive multiple notifications
                        // 1 - when viewer1 joins
                        // 2 - when viewer2 joins
                        // 3 - when viewer2 closes
                        if (pass === 1) {
                           expect(sessionInfo.viewers.length).to.equal(1);
                           expect(sessionInfo.viewers[0].connectionId).to.equal(squintViewer1.connectionId);

                           let info = await Squint.inspect(TestUrlLocalhost);
                           expect(info.sessions.length).to.equal(1);
                           expect(info.sessions[0].viewers.length).to.equal(1);
                           expectConnection(info.sessions[0].viewers[0], squintViewer1);
                        }
                        else if (pass === 2) {
                           expect(sessionInfo.viewers.length).to.equal(2);
                           expect(sessionInfo.viewers[0].connectionId).to.equal(squintViewer1.connectionId);
                           expect(sessionInfo.viewers[1].connectionId).to.equal(squintViewer2.connectionId);

                           let info = await Squint.inspect(TestUrlLocalhost);
                           expect(info.sessions.length).to.equal(1);
                           expect(info.sessions[0].viewers.length).to.equal(2);
                           expectConnection(info.sessions[0].viewers[0], squintViewer1);
                           expectConnection(info.sessions[0].viewers[1], squintViewer2);
                        }
                        else if (pass === 3) {
                           expect(sessionInfo.viewers.length).to.equal(1);
                           expect(sessionInfo.viewers[0].connectionId).to.equal(squintViewer1.connectionId);

                           let info = await Squint.inspect(TestUrlLocalhost);
                           expect(info.sessions.length).to.equal(1);
                           expect(info.sessions[0].viewers.length).to.equal(1);
                           expectConnection(info.sessions[0].viewers[0], squintViewer1);

                           // success!
                           resolve();
                        }
                        else {
                           reject();
                        }
                        pass++;
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               });

            });

            // join the session
            await squintViewer1.joinSession(sessionId);

            // use timeouts to give the server time to send out separate messages for each viewer list change
            setTimeout(() => {
               // this should cause Pass 2
               squintViewer2.joinSession(sessionId)
                  .then(() => {
                     setTimeout(() => {
                        // this should cause Pass 3
                        squintViewer2.close();
                     }, TimeMsTesting.Interval + TimeMsTesting.Buffer);
                  })
                  .catch((err) => {
                     // TODO remove throw within promise chain
                     throw new Error(err);
                  });
            }, TimeMsTesting.Interval + TimeMsTesting.Buffer);

            return promise;
         });

         it('should notify session members as viewers join and leave (abnormally)', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer1 = 'TesterViewer1';
            let userNameViewer2 = 'TesterViewer2';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expectConnection(info.connections[0], squintHost);
            expect(info.sessions.length).to.equal(0);

            // create the session
            let sessionId = await squintHost.createSession();

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].title).to.equal(squintHost.userName);
            expect(info.sessions[0].viewers.length).to.equal(0);
            expectConnection(info.sessions[0].host, squintHost);

            // add the other connections
            let squintViewer1 = await createSquint(TestUrlLocalhost, userNameViewer1);
            let squintViewer2 = await createSquint(TestUrlLocalhost, userNameViewer2);

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(3);
            expectConnection(info.connections[0], squintHost);
            expectConnection(info.connections[1], squintViewer1);
            expectConnection(info.connections[2], squintViewer2);
            expect(info.sessions.length).to.equal(1);

            let promise = new Promise<void>((resolve, reject) => {

               let pass = 1;
               squintViewer1.on({
                  event: SquintEvent.SessionInfo,
                  handler: async (sessionInfo) => {

                     try {
                        // should receive multiple notifications
                        // 1 - when viewer1 joins
                        // 2 - when viewer2 joins
                        // 3 - when viewer2 closes
                        if (pass === 1) {
                           expect(sessionInfo.viewers.length).to.equal(1);
                           expect(sessionInfo.viewers[0].connectionId).to.equal(squintViewer1.connectionId);

                           let info = await Squint.inspect(TestUrlLocalhost);
                           expect(info.sessions.length).to.equal(1);
                           expect(info.sessions[0].viewers.length).to.equal(1);
                           expectConnection(info.sessions[0].viewers[0], squintViewer1);
                        }
                        else if (pass === 2) {
                           expect(sessionInfo.viewers.length).to.equal(2);
                           expect(sessionInfo.viewers[0].connectionId).to.equal(squintViewer1.connectionId);
                           expect(sessionInfo.viewers[1].connectionId).to.equal(squintViewer2.connectionId);

                           let info = await Squint.inspect(TestUrlLocalhost);
                           expect(info.sessions.length).to.equal(1);
                           expect(info.sessions[0].viewers.length).to.equal(2);
                           expectConnection(info.sessions[0].viewers[0], squintViewer1);
                           expectConnection(info.sessions[0].viewers[1], squintViewer2);
                        }
                        else if (pass === 3) {
                           expect(sessionInfo.viewers.length).to.equal(1);
                           expect(sessionInfo.viewers[0].connectionId).to.equal(squintViewer1.connectionId);

                           let info = await Squint.inspect(TestUrlLocalhost);
                           expect(info.sessions.length).to.equal(1);
                           expect(info.sessions[0].viewers.length).to.equal(1);
                           expectConnection(info.sessions[0].viewers[0], squintViewer1);

                           // success!
                           resolve();
                        }
                        else {
                           reject();
                        }
                        pass++;
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               });

            });

            // join the session
            await squintViewer1.joinSession(sessionId);

            // use timeouts to give the server time to send out separate messages for each viewer list change
            setTimeout(() => {
               // this should cause Pass 2
               squintViewer2.joinSession(sessionId)
                  .then(() => {
                     setTimeout(() => {
                        // this should cause Pass 3
                        squintViewer2.ws.close(Squint.CLOSE_CODE_FAIL_NO_RECONNECT);
                     }, TimeMsTesting.Interval + TimeMsTesting.Buffer);
                  })
                  .catch((err) => {
                     // TODO remove throw within promise chain
                     throw new Error(err);
                  });
            }, TimeMsTesting.Interval + TimeMsTesting.Buffer);

            return promise;
         });

         it('should notify hosts as viewers join and leave (normally)', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer1 = 'TesterViewer1';
            let userNameViewer2 = 'TesterViewer2';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expectConnection(info.connections[0], squintHost);
            expect(info.sessions.length).to.equal(0);

            // create the session
            let sessionId = await squintHost.createSession();
            await sleep(TimeMsTesting.SessionTimeout);

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].title).to.equal(squintHost.userName);
            expect(info.sessions[0].viewers.length).to.equal(0);
            expectConnection(info.sessions[0].host, squintHost);

            // add the other connections
            let squintViewer1 = await createSquint(TestUrlLocalhost, userNameViewer1);
            let squintViewer2 = await createSquint(TestUrlLocalhost, userNameViewer2);

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(3);
            expectConnection(info.connections[0], squintHost);
            expectConnection(info.connections[1], squintViewer1);
            expectConnection(info.connections[2], squintViewer2);
            expect(info.sessions.length).to.equal(1);

            let promise = new Promise<void>((resolve, reject) => {

               let pass = 1;
               squintHost.on({
                  event: SquintEvent.SessionInfo,
                  handler: async (sessionInfo) => {

                     try {
                        // should receive multiple notifications
                        // 1 - when viewer1 joins
                        // 2 - when viewer2 joins
                        // 3 - when viewer2 closes
                        if (pass === 1) {
                           expect(sessionInfo.viewers.length).to.equal(1);
                           expect(sessionInfo.viewers[0].connectionId).to.equal(squintViewer1.connectionId);

                           let info = await Squint.inspect(TestUrlLocalhost);
                           expect(info.sessions.length).to.equal(1);
                           expect(info.sessions[0].viewers.length).to.equal(1);
                           expectConnection(info.sessions[0].viewers[0], squintViewer1);
                        }
                        else if (pass === 2) {
                           expect(sessionInfo.viewers.length).to.equal(2);
                           expect(sessionInfo.viewers[0].connectionId).to.equal(squintViewer1.connectionId);
                           expect(sessionInfo.viewers[1].connectionId).to.equal(squintViewer2.connectionId);

                           let info = await Squint.inspect(TestUrlLocalhost);
                           expect(info.sessions.length).to.equal(1);
                           expect(info.sessions[0].viewers.length).to.equal(2);
                           expectConnection(info.sessions[0].viewers[0], squintViewer1);
                           expectConnection(info.sessions[0].viewers[1], squintViewer2);
                        }
                        else if (pass === 3) {
                           expect(sessionInfo.viewers.length).to.equal(1);
                           expect(sessionInfo.viewers[0].connectionId).to.equal(squintViewer1.connectionId);

                           let info = await Squint.inspect(TestUrlLocalhost);
                           expect(info.sessions.length).to.equal(1);
                           expect(info.sessions[0].viewers.length).to.equal(1);
                           expectConnection(info.sessions[0].viewers[0], squintViewer1);

                           // success!
                           resolve();
                        }
                        else {
                           reject();
                        }
                        pass++;
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               });

            });

            // join the session
            await squintViewer1.joinSession(sessionId);

            // use timeouts to give the server time to send out separate messages for each viewer list change
            setTimeout(() => {
               // this should cause Pass 2
               squintViewer2.joinSession(sessionId)
                  .then(() => {
                     setTimeout(() => {
                        // this should cause Pass 3
                        squintViewer2.close();
                     }, TimeMsTesting.Interval + TimeMsTesting.Buffer);
                  })
                  .catch((err) => {
                     // TODO remove throw within promise chain
                     throw new Error(err);
                  });
            }, TimeMsTesting.Interval + TimeMsTesting.Buffer);

            return promise;
         });

         it('should notify hosts as viewers join and leave (abnormally)', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer1 = 'TesterViewer1';
            let userNameViewer2 = 'TesterViewer2';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expectConnection(info.connections[0], squintHost);
            expect(info.sessions.length).to.equal(0);

            // create the session
            let sessionId = await squintHost.createSession();
            await sleep(TimeMsTesting.SessionTimeout);

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].title).to.equal(squintHost.userName);
            expect(info.sessions[0].viewers.length).to.equal(0);
            expectConnection(info.sessions[0].host, squintHost);

            // add the other connections
            let squintViewer1 = await createSquint(TestUrlLocalhost, userNameViewer1);
            let squintViewer2 = await createSquint(TestUrlLocalhost, userNameViewer2);

            info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(3);
            expectConnection(info.connections[0], squintHost);
            expectConnection(info.connections[1], squintViewer1);
            expectConnection(info.connections[2], squintViewer2);
            expect(info.sessions.length).to.equal(1);

            let promise = new Promise<void>((resolve, reject) => {

               let pass = 1;
               squintHost.on({
                  event: SquintEvent.SessionInfo,
                  handler: async (sessionInfo) => {

                     try {
                        // should receive multiple notifications
                        // 1 - when viewer1 joins
                        // 2 - when viewer2 joins
                        // 3 - when viewer2 closes
                        if (pass === 1) {
                           expect(sessionInfo.viewers.length).to.equal(1);
                           expect(sessionInfo.viewers[0].connectionId).to.equal(squintViewer1.connectionId);

                           let info = await Squint.inspect(TestUrlLocalhost);
                           expect(info.sessions.length).to.equal(1);
                           expect(info.sessions[0].viewers.length).to.equal(1);
                           expectConnection(info.sessions[0].viewers[0], squintViewer1);
                        }
                        else if (pass === 2) {
                           expect(sessionInfo.viewers.length).to.equal(2);
                           expect(sessionInfo.viewers[0].connectionId).to.equal(squintViewer1.connectionId);
                           expect(sessionInfo.viewers[1].connectionId).to.equal(squintViewer2.connectionId);

                           let info = await Squint.inspect(TestUrlLocalhost);
                           expect(info.sessions.length).to.equal(1);
                           expect(info.sessions[0].viewers.length).to.equal(2);
                           expectConnection(info.sessions[0].viewers[0], squintViewer1);
                           expectConnection(info.sessions[0].viewers[1], squintViewer2);
                        }
                        else if (pass === 3) {
                           expect(sessionInfo.viewers.length).to.equal(1);
                           expect(sessionInfo.viewers[0].connectionId).to.equal(squintViewer1.connectionId);

                           let info = await Squint.inspect(TestUrlLocalhost);
                           expect(info.sessions.length).to.equal(1);
                           expect(info.sessions[0].viewers.length).to.equal(1);
                           expectConnection(info.sessions[0].viewers[0], squintViewer1);

                           // success!
                           resolve();
                        }
                        else {
                           reject();
                        }
                        pass++;
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               });

            });

            // join the session
            await squintViewer1.joinSession(sessionId);

            // use timeouts to give the server time to send out separate messages for each viewer list change
            setTimeout(() => {
               // this should cause Pass 2
               squintViewer2.joinSession(sessionId)
                  .then(() => {
                     setTimeout(() => {
                        // this should cause Pass 3
                        squintViewer2.ws.close(Squint.CLOSE_CODE_FAIL_NO_RECONNECT);
                     }, TimeMsTesting.Interval + TimeMsTesting.Buffer);
                  })
                  .catch((err) => {
                     // TODO remove throw within promise chain
                     throw new Error(err);
                  });
            }, TimeMsTesting.Interval + TimeMsTesting.Buffer);

            return promise;
         });


         it('should notify the host when it starts a session', async function () {

            let userNameHost = 'TesterHost';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(1);
            expectConnection(info.connections[0], squintHost);
            expect(info.sessions.length).to.equal(0);

            let promise = new Promise<void>((resolve, reject) => {

               squintHost.on({
                  event: SquintEvent.SessionInfo,
                  handler: async (sessionInfo) => {

                     try {
                        // should receive a notification when the session starts
                        expectConnection(sessionInfo.host, squintHost);
                        expect(sessionInfo.viewers.length).to.equal(0);

                        let info = await Squint.inspect(TestUrlLocalhost);
                        expect(info.sessions.length).to.equal(1);
                        expect(info.sessions[0].viewers.length).to.equal(0);

                        // success!
                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               });
            });

            // create the session
            await squintHost.createSession();

            return promise;
         });

         it('should reject joining if a password is needed but not supplied', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer = 'TesterViewer';
            let password = 'TestPassword';

            // create the session
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);
            let sessionId = await squintHost.createSession(password);

            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);

            return new Promise<void>((resolve, reject) => {

               // try to join without a password
               squintViewer.joinSession(sessionId)
                  .then(() => {
                     reject('join should have failed')
                  })
                  .catch(async (err) => {
                     try {
                        expect(err).to.equal(SquintStrings.CANNOT_JOIN_SESSION__INVALID_PASSWORD)

                        let info = await Squint.inspect(TestUrlLocalhost);
                        expect(info.connections.length).to.equal(2);
                        expect(info.sessions.length).to.equal(1);
                        expect(info.sessions[0].viewers.length).to.equal(0);

                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  });
            });
         });

         it('should reject joining with the wrong password', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer = 'TesterViewer';
            let password = 'TestPassword';

            // create the session
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);
            let sessionId = await squintHost.createSession(password);

            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);

            return new Promise<void>((resolve, reject) => {

               // try to join without a password
               squintViewer.joinSession(sessionId, 'Incorrect Password')
                  .then(() => {
                     reject('join should have failed')
                  })
                  .catch(async (err) => {
                     try {
                        expect(err).to.equal(SquintStrings.CANNOT_JOIN_SESSION__INVALID_PASSWORD)

                        let info = await Squint.inspect(TestUrlLocalhost);
                        expect(info.connections.length).to.equal(2);
                        expect(info.sessions.length).to.equal(1);
                        expect(info.sessions[0].viewers.length).to.equal(0);

                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  });
            });
         });

         it('should work with passwords', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer = 'TesterViewer';
            let password = 'TestPassword';

            // create the session
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);
            let sessionId = await squintHost.createSession(password);

            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);

            // try to join without a password
            await squintViewer.joinSession(sessionId, password)

            let info = await Squint.inspect(TestUrlLocalhost);
            expect(info.connections.length).to.equal(2);
            expect(info.sessions.length).to.equal(1);
            expect(info.sessions[0].viewers.length).to.equal(1);
            expectConnection(info.sessions[0].viewers[0], squintViewer);
         });

      });


      describe('images', function () {

         it('should send an initial image to session listeners', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer = 'TesterViewer';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);
            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);

            // start a session
            let sessionId = await squintHost.createSession();
            squintHost.sendImage(imageBlob);

            // when squintViewer receives the image, the test has passed
            return new Promise<void>((resolve, reject) => {
               squintViewer.on({
                  event: SquintEvent.Image,
                  handler: () => {
                     resolve();
                  }
               });

               // join - we should then get a copy of the initial image
               squintViewer.joinSession(sessionId)
                  .catch((err) => {
                     reject(err);
                  });
            });
         });

         it('should send continual images to session listeners', async function () {

            let { squintHost, squintViewer } = await createSession();

            // make sure the initial join image has been received
            await sleep(TimeMsTesting.Buffer);

            let imageCount = 0;
            squintViewer.requestNextImage();
            squintViewer.on({
               event: SquintEvent.Image,
               handler: () => {
                  imageCount++;
                  squintViewer.requestNextImage();
               }
            });

            // send a bunch of images
            let sentImageCount = 10;
            for (let i = 0; i < sentImageCount; i++) {
               squintHost.sendImage(imageBlob);

               // allow the viewer to request the next image
               await sleep(10);
            }

            expect(imageCount).to.equal(sentImageCount);
         });

         it('should continue receive images if the host changes', async function () {

            let { squintHost, squintViewer, sessionId } = await createSession();

            // create a new host and send an image
            let squintHost2 = await createSquint(TestUrlLocalhost, 'TesterHost2');
            await squintHost2.joinSession(sessionId);
            squintHost2.requestToBeHost();

            // let messages fire before we start counting
            await sleep(TimeMsTesting.Buffer);

            let imageCount = 0;
            squintViewer.requestNextImage();
            squintViewer.on({
               event: SquintEvent.Image,
               handler: () => {
                  imageCount++;
                  squintViewer.requestNextImage();
               }
            });

            // send a bunch of images
            let sentImageCount = 10;
            for (let i = 0; i < sentImageCount; i++) {
               squintHost2.sendImage(imageBlob);

               // allow the viewer to request the next image
               await sleep(10);
            }

            expect(imageCount).to.equal(sentImageCount);
         });

         it('should continue to receive images if the listener reconnects', async function () {

            let { squintHost, squintViewer } = await createSession();

            let imageCount = 0;
            squintViewer.requestNextImage();
            squintViewer.on({
               event: SquintEvent.Image,
               handler: () => {
                  imageCount++;
                  squintViewer.requestNextImage();
               }
            });

            // send the first batch of images
            // send a bunch of images
            let sentImageCount = 10;
            for (let i = 0; i < sentImageCount; i++) {
               squintHost.sendImage(imageBlob);

               // allow the viewer to request the next image
               await sleep(10);
            }

            expect(imageCount).to.equal(sentImageCount);

            // disconnect and reconnect
            squintViewer.ws.close(Squint.CLOSE_CODE_FAIL_RECONNECT);
            expect(squintViewer.connected).to.be.false;

            // let the reconnect happen
            await sleep(TimeMsTesting.ZombieTimeout);
            expect(squintViewer.connected).to.be.true;

            // send a bunch of images
            for (let i = 0; i < sentImageCount; i++) {
               squintHost.sendImage(imageBlob);

               // allow the viewer to request the next image
               await sleep(10);
            }

            expect(imageCount).to.equal(2 * sentImageCount);
         });

         it('should continue to receive images if the listener reconnects (without calling requestNextImage())', async function () {

            let { squintHost, squintViewer } = await createSession();

            let imageCount = 0;
            squintViewer.requestNextImage();
            squintViewer.on({
               event: SquintEvent.Image,
               handler: () => {
                  imageCount++;
                  if (imageCount != 10) {
                     squintViewer.requestNextImage();
                  }
               }
            });

            // send the first batch of images
            // send a bunch of images
            let sentImageCount = 10;
            for (let i = 0; i < sentImageCount; i++) {
               squintHost.sendImage(imageBlob);

               // allow the viewer to request the next image
               await sleep(10);
            }

            expect(imageCount).to.equal(sentImageCount);

            // disconnect and reconnect
            squintViewer.ws.close(Squint.CLOSE_CODE_FAIL_RECONNECT);
            expect(squintViewer.connected).to.be.false;

            // let the reconnect happen
            await sleep(TimeMsTesting.ZombieTimeout);
            expect(squintViewer.connected).to.be.true;

            // send a bunch of images
            for (let i = 0; i < sentImageCount; i++) {
               squintHost.sendImage(imageBlob);

               // allow the viewer to request the next image
               await sleep(10);
            }

            expect(imageCount).to.equal(2 * sentImageCount);
         });

         it('should NOT receive images sent from viewers', async function () {

            let { squintHost, squintViewer, sessionId } = await createSession();

            // add another viewer
            let squintViewer2 = await createSquint(TestUrlLocalhost, 'TesterViewer2');
            await squintViewer2.joinSession(sessionId);

            // let messages fire before we start counting
            await sleep(TimeMsTesting.Buffer);

            let imageCount = 0;
            squintViewer.requestNextImage();
            squintViewer.on({
               event: SquintEvent.Image,
               handler: () => {
                  imageCount++;
                  squintViewer.requestNextImage();
               }
            });

            // send a bunch of images
            let sentImageCount = 10;
            for (let i = 0; i < sentImageCount; i++) {
               squintViewer2.sendImage(imageBlob);

               // allow the viewer to request the next image
               await sleep(10);
            }

            // the images should all be ignored by the server
            expect(imageCount).to.equal(0);
         });

         it('should NOT receive images sent from old hosts', async function () {

            let { squintHost, squintViewer, sessionId } = await createSession();

            // create a new host
            let squintHost2 = await createSquint(TestUrlLocalhost, 'TesterHost2');
            await squintHost2.joinSession(sessionId);
            squintHost2.requestToBeHost();

            // let messages fire before we start counting
            await sleep(TimeMsTesting.Buffer);

            let imageCount = 0;
            squintViewer.requestNextImage();
            squintViewer.on({
               event: SquintEvent.Image,
               handler: () => {
                  imageCount++;
                  squintViewer.requestNextImage();
               }
            });

            // send a bunch of images
            let sentImageCount = 10;
            for (let i = 0; i < sentImageCount; i++) {
               squintHost.sendImage(imageBlob);

               // allow the viewer to request the next image
               await sleep(10);
            }

            // the images should all be ignored by the server
            expect(imageCount).to.equal(0);
         });

         it('should suspend sending images if the listener is backlogged', async function () {

            // this test is identical to the continual image test except we never call 
            // ready for next image so no images should be received
            let { squintHost, squintViewer } = await createSession();

            // make sure the initial join image has been received
            await sleep(TimeMsTesting.Buffer);

            let imageCount = 0;
            //squintViewer.requestNextImage();
            squintViewer.on({
               event: SquintEvent.Image,
               handler: () => {
                  imageCount++;
                  //squintViewer.requestNextImage();
               }
            });

            // send a bunch of images
            let sentImageCount = 10;
            for (let i = 0; i < sentImageCount; i++) {
               squintHost.sendImage(imageBlob);
               await sleep(5);
            }

            // first image makes it through, but no more until the next image is requested
            expect(imageCount).to.equal(1);
         });



      });

      describe('camera', function () {

         it('should send CameraPaused events (to viewer, but not host)', async function () {

            let { squintHost, squintViewer } = await createSession();

            // when all session members receive the pause event, the test has passed
            return new Promise<void>((resolve, reject) => {
               let viewerEvent = 0;
               let hostEvent = 0;
               squintViewer.on({
                  event: SquintEvent.CameraPaused,
                  handler: () => {
                     viewerEvent++;
                  }
               });

               squintHost.on({
                  event: SquintEvent.CameraPaused,
                  handler: () => {
                     hostEvent++;
                  }
               });

               setTimeout(() => {
                  try {
                     expect(viewerEvent).to.equal(1);
                     expect(hostEvent).to.equal(0);
                     expect(squintViewer.remoteCameraPaused).to.be.true;
                     expect(squintHost.remoteCameraPaused).to.be.false; // there is no remote camera, value stays 'false'
                     resolve();
                  }
                  catch (err) {
                     reject(err);
                  }
               }, TimeMsTesting.Buffer);

               squintHost.cameraPaused();
            });
         });

         it('should show the camera as disconnected if the host closes normally', async function () {

            let { squintHost, squintViewer } = await createSession();

            squintHost.close();

            await sleep(TimeMsTesting.ZombieTimeout + TimeMsTesting.Buffer);

            expect(squintHost.remoteCameraConnected).to.be.true; // there is no remote camera, value stays 'true'
            expect(squintViewer.remoteCameraConnected).to.be.false;
         });

         it('should show the camera as disconnected if the host closes abruptly and does not reconnect', async function () {

            let { squintHost, squintViewer } = await createSession();

            squintHost.ws.close(Squint.CLOSE_CODE_FAIL_NO_RECONNECT);

            await sleep(TimeMsTesting.ZombieTimeout + TimeMsTesting.Buffer);

            expect(squintHost.remoteCameraConnected).to.be.true; // there is no remote camera, value stays 'true'
            expect(squintViewer.remoteCameraConnected).to.be.false;
         });

         it('should show the camera as connected if the host closes abruptly but reconnects', async function () {

            let { squintHost, squintViewer } = await createSession();

            squintHost.ws.close(Squint.CLOSE_CODE_FAIL_RECONNECT);

            await sleep(TimeMsTesting.Buffer);

            expect(squintHost.remoteCameraConnected).to.be.true; // there is no remote camera, value stays 'true'
            expect(squintViewer.remoteCameraConnected).to.be.true;
         });

         it('should show the camera as connected if the host closes and another connection becomes host', async function () {

            let { squintHost, squintViewer, sessionId } = await createSession();

            squintViewer.requestNextImage();

            // close the host so the state goes to false
            squintHost.close();
            await sleep(TimeMsTesting.Buffer);
            expect(squintViewer.remoteCameraConnected).to.be.false;

            // TODO there is a state we're not managing - state of when the host connects, but before it sends an image. The
            // app currently displays "Host Disconnected" but that's no longer the case.

            // create a new host and send an image
            let squintHost2 = await createSquint(TestUrlLocalhost, 'TesterHost2');
            await squintHost2.joinSession(sessionId);
            squintHost2.requestToBeHost();
            squintHost2.sendImage(imageBlob);

            // let events propagate
            await sleep(TimeMsTesting.Buffer);

            // check
            expect(squintViewer.remoteCameraConnected).to.be.true;
         });

         it('should get the remoteCameraPaused state when joining a session', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer = 'TesterViewer';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);
            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);

            // start a session
            let sessionId = await squintHost.createSession();
            squintHost.cameraPaused();

            // join
            await squintViewer.joinSession(sessionId);

            await sleep(TimeMsTesting.Buffer);

            expect(squintViewer.remoteCameraPaused).to.be.true;
         });

         it('should reset remoteCameraPaused flag after the next image is sent/received', async function () {

            let { squintHost, squintViewer } = await createSession();

            squintViewer.requestNextImage();

            // pause the camera
            squintHost.cameraPaused();

            // let the events propagate
            await sleep(TimeMsTesting.Buffer);

            // verify
            expect(squintViewer.remoteCameraPaused).to.be.true;

            // send another image - should unpause
            squintHost.sendImage(imageBlob);

            // let the events propagate
            await sleep(TimeMsTesting.Buffer);

            // verify
            expect(squintViewer.remoteCameraPaused).to.be.false;
         });

         it('should reset camera flags after you become host', async function () {

            let { squintHost, squintViewer } = await createSession();

            squintViewer.requestNextImage();

            // pause the camera
            squintHost.cameraPaused();

            // let the events propagate
            await sleep(TimeMsTesting.Buffer);

            // disconnect
            squintHost.close();

            // let the events propagate
            await sleep(TimeMsTesting.Buffer);

            // verify
            expect(squintViewer.remoteCameraPaused).to.be.true;
            expect(squintViewer.remoteCameraConnected).to.be.false;

            // make the viewer the host - should reset flags
            squintViewer.requestToBeHost();

            // let the events propagate
            await sleep(TimeMsTesting.Buffer);

            // verify
            expect(squintViewer.remoteCameraPaused).to.be.false;
            expect(squintViewer.remoteCameraConnected).to.be.true;
         });
      });

      describe('Timer', function () {

         function createTestPromise(
            sourceInfo: ITimerInfo,
            expectedMsgReceivers: Squint[],
            nonExpectedMsgReceiver: Squint): Promise<void> {

            let events: boolean[] = [];
            let promise = new Promise<void>((resolve, reject) => {

               for (let i = 0; i < expectedMsgReceivers.length; i++) {

                  events.push(false);

                  expectedMsgReceivers[i].on({
                     event: SquintEvent.SynchronizeTimer,
                     handler: (info: ITimerInfo) => {
                        events[i] = true;
                        try {
                           expect(info.running).to.equal(sourceInfo.running);
                           expect(info.durationMs).to.equal(sourceInfo.durationMs);
                           expect(info.remainingMs).to.equal(sourceInfo.remainingMs);
                        }
                        catch (err) {
                           reject(err);
                        }

                        let count = 0;
                        for (let value of events) {
                           if (value) {
                              count++;
                           }
                        }
                        if (count === expectedMsgReceivers.length) {

                           // don't immediately resolve - give it time for bad events
                           // to happen before closing sockets
                           setTimeout(() => {
                              resolve();
                           }, TimeMsTesting.Interval);
                        }
                     }
                  })
               }

               nonExpectedMsgReceiver.on({
                  event: SquintEvent.SynchronizeTimer,
                  handler: () => {
                     reject('sender should not receive synchronization message');
                  }
               });
            });

            return promise;
         }

         it('should send SynchronizeTime message when the host updates the timer', async function () {

            let numViewers = 1;
            let { squintHost, squintViewers } = await createSession(numViewers);

            let sourceInfo: ITimerInfo = {
               running: true,
               durationMs: 1000,
               remainingMs: 500,
               alarmSounding: false,
            }

            let promise = createTestPromise(sourceInfo, squintViewers, squintHost);

            squintHost.synchronizeTimer(sourceInfo);

            await sleep(TimeMsTesting.Interval);

            return promise;
         });

         it('should send SynchronizeTime message when a viewer updates the timer', async function () {

            let numViewers = 5;
            let { squintHost, squintViewers } = await createSession(numViewers);

            let expectedMsgReceivers: Squint[] = [];
            expectedMsgReceivers.push(squintHost);
            for (let i = 1; i < numViewers; i++) {
               expectedMsgReceivers.push(squintViewers[i]);
            }
            let nonExpectedMsgReceiver = squintViewers[0];

            let sourceInfo: ITimerInfo = {
               running: true,
               durationMs: 1000,
               remainingMs: 500,
               alarmSounding: false,
            }

            let promise = createTestPromise(sourceInfo, expectedMsgReceivers, nonExpectedMsgReceiver);

            squintViewers[0].synchronizeTimer(sourceInfo);

            return promise;
         });

         it('should receive a SynchronizeTime message when requested', async function () {

            let userNameHost = 'TesterHost';
            let userNameViewer = 'TesterViewer';
            let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

            // start a session
            let sessionId = await squintHost.createSession();

            let sourceInfo: ITimerInfo = {
               running: true,
               durationMs: 1000,
               remainingMs: 500,
               alarmSounding: false,
            }

            // send time info to the server
            squintHost.synchronizeTimer(sourceInfo);
            await sleep(TimeMsTesting.Interval);

            // join
            let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);
            await squintViewer.joinSession(sessionId);

            let count = 0;
            let promise = new Promise<void>((resolve, reject) => {

               squintViewer.on({
                  event: SquintEvent.SynchronizeTimer,
                  handler: (info: ITimerInfo) => {
                     count++;
                     try {
                        expect(count).to.equal(1);
                        expect(info.running).to.equal(sourceInfo.running);
                        expect(info.durationMs).to.equal(sourceInfo.durationMs);
                        expect(info.remainingMs).to.be.greaterThan(0);
                        expect(info.remainingMs).to.be.lessThan(sourceInfo.remainingMs);
                        resolve();
                     }
                     catch (err) {
                        reject(err);
                     }
                  }
               })
            });

            squintViewer.synchronizeTimer();

            return promise;

         });

      });
   }
});


// TESTS
// stress tester
// multiple uploads
// zombie mode
// chat message
// user name change
