import { expect } from 'chai';
import { Squint } from '../src/Apps/Squint/Squint';
import { WebSocketFactory } from '../src/Apps/Squint/WebSocketFactory';
import { TestUrlLocalhost, TestUrlMock } from './Constants';
import { MockServer } from './MockServer';
import NodeWebSocket from 'ws';
import { WebSocket as MockWebSocket } from 'mock-socket';
import { IConnectionInfoFull, ConnectionState } from '../src/Apps/Squint/SquintMessage';

export function sleep(delayMs: number): Promise<void> {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve();
      }, delayMs);
   });
}

enum WebSocketType {
   Mock,
   Node
}

function use(type: WebSocketType) {
   switch (type) {
      case WebSocketType.Node:
         WebSocketFactory.create = (url: string) => {
            return new NodeWebSocket(url) as unknown as WebSocket;
         }
         break;

      case WebSocketType.Mock:
         WebSocketFactory.create = (url: string) => {
            return new MockWebSocket(url) as unknown as WebSocket;
         }
         break;
   }
}

export let TimeMsTesting = {
   Interval: 0,
   SessionTimeout: 0,
   ZombieTimeout: 0,
   Buffer: 0
}

let squints: Squint[] = [];
let servers: MockServer[] = [];

export async function squintBeforeEach(ctx: Mocha.Context): Promise<void> {
   // replace browser WebSockets (that don't exist here) with Node WebSockets
   use(WebSocketType.Node);

   let info = await Squint.inspect(TestUrlLocalhost);
   TimeMsTesting.Interval = info.intervalMs;
   TimeMsTesting.SessionTimeout = info.sessionTimeoutMs;
   TimeMsTesting.ZombieTimeout = info.zombieTimeoutMs;
   TimeMsTesting.Buffer = 50;

   Squint.log(TestUrlLocalhost, '\n\n\n<<<<<<<<<< Starting Test: \'' + ctx.currentTest.title + '\' >>>>>>>>>>>>');
}

export async function squintAfterEach(ctx: Mocha.Context): Promise<void> {

   // if the test failed, it may abandon before closing things
   for (let squint of squints) {
      if (squint.connected) {
         squint.close();
      }
   }
   for (let server of servers) {
      server.close();
   }

   // wait long enough for all interval messages to get sent
   await sleep(TimeMsTesting.Interval + TimeMsTesting.Buffer);

   use(WebSocketType.Node);
   Squint.log(TestUrlLocalhost, '<<<<<<<<<< Ending Test: \'' + ctx.currentTest.title + '\' >>>>>>>>>>>>');

   // if we're not using a mock server, make sure the test server is clean
   if (servers.length === 0) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      let info = await Squint.inspect(TestUrlLocalhost);
      expect(info.connections.length).to.equal(0);
      expect(info.sessions.length).to.equal(0);
   }
}


export function createSquint(url: string, userName: string): Promise<Squint> {
   let squint = new Squint();
   return connectSquint(squint, url, userName)
      .then(() => {
         return squint;
      });
}

export function createMockServer(): MockServer {
   // use mock web scokets
   use(WebSocketType.Mock);

   let server = new MockServer(TestUrlMock);
   servers.push(server);
   return server;
}

export function connectSquint(squint: Squint, url: string, userName: string): Promise<void> {
   return new Promise<void>((resolve, reject) => {
      squint.connect(url, userName)
         .then(() => {
            expect(squint.userName).to.equal(userName);
            squints.push(squint);
            resolve();
         })
         .catch((err) => {
            reject(err);
         });
   });
}

export async function createSession(numViewers = 1): Promise<{
   squintHost: Squint;
   squintViewer?: Squint;
   squintViewers?: Squint[];
   sessionId: string
}> {

   let userNameHost = 'TesterHost';
   let userNameViewer = 'TesterViewer';
   let squintHost = await createSquint(TestUrlLocalhost, userNameHost);

   let info = await Squint.inspect(TestUrlLocalhost);
   expect(info.connections.length).to.equal(1);
   expectConnection(info.connections[0], squintHost);
   expect(info.sessions.length).to.equal(0);

   // start a session
   let sessionId = await squintHost.createSession();

   info = await Squint.inspect(TestUrlLocalhost);
   expect(info.sessions.length).to.equal(1);
   expect(info.sessions[0].title).to.equal(squintHost.userName);
   expect(info.sessions[0].viewers.length).to.equal(0);
   expect(info.sessions[0].sessionId).to.equal(sessionId);
   expectConnection(info.sessions[0].host, squintHost);

   if (numViewers === 1) {
      // join
      let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer);
      await squintViewer.joinSession(sessionId);
      let squintViewers = [squintViewer];
      return { squintHost, squintViewer, squintViewers, sessionId }
   }
   else {
      let squintViewers: Squint[] = [];
      for (let i = 0; i < numViewers; i++) {
         let squintViewer = await createSquint(TestUrlLocalhost, userNameViewer + (i + 1));
         await squintViewer.joinSession(sessionId);
         squintViewers.push(squintViewer);
      }
      return { squintHost, squintViewers, sessionId }
   }
}

export function expectConnection(actual: IConnectionInfoFull, expected: Squint): void {
   expect(actual.userName).to.equal(expected.userName);
   expect(actual.connectionId).to.equal(expected.connectionId);
   expect(actual.state).to.equal(ConnectionState.Open);
}


