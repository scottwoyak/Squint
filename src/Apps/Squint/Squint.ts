import { SquintWsUrl as SquintWsUrl } from './Servers';
import { debug } from './SquintApp';
import { SquintSocket } from './SquintSocket';
import { ISquintMessage, SquintMessageSubject, ISquintInfo, IConnectionInfoBasic, JoinSessionStatus, CreateSessionStatus } from './SquintMessage';
import { EventManager } from './EventManager';
import { ISquintEventHandler, SquintEvent } from './SquintEvents';
import { WebSocketFactory } from './WebSocketFactory';
import { PromiseMap } from './PromiseMap';
import { v4 as uuidv4 } from 'uuid';
import { SquintStrings } from './SquintStrings';
import { Stopwatch } from '../../Util/Stopwatch';
import { SquintModelTimer } from './SquintModelTimer';
import { ITimerInfo } from './ITimerInfo';

export class Squint {

   public static readonly url = SquintWsUrl;
   public ReconnectTimeoutS = 600;
   public ReconnectRetryDelayS = 1;

   public ss: SquintSocket | null = null;
   public _userName: string | null = null;
   private _remoteCameraPaused = false;
   private _remoteCameraConnected = true;
   private _url: string | null;
   private requests = new PromiseMap();
   private reconnectStopwatch: Stopwatch | null = null;
   private _modelTimer: SquintModelTimer;

   private eventManager = new EventManager();

   // special code that close the socket with an error code thus causing the
   // server to go into zombie mode. One code also tells us, the client, to
   // not try to auto-reconnect. Use these for testing only
   public static readonly CLOSE_CODE_FAIL_NO_RECONNECT = 3001;
   public static readonly CLOSE_CODE_FAIL_RECONNECT = 3000;

   /**
    * For debugging only
    */
   public get ws(): WebSocket {
      return this.ss.ws;
   }

   public get modelTimer(): SquintModelTimer | null {
      return this._modelTimer;
   }

   public get userName(): string {
      if (this._userName === null) {
         return 'Unknown';
      }
      else {
         return this._userName;
      }
   }

   public set userName(userName: string) {
      if (this._userName !== userName) {
         this._userName = userName;
         if (this.connected) {
            this.updateConnectionInfo(userName);
         }
      }
   }

   public get connected(): boolean {
      if (this.ss && this.ss.connected) {
         return true;
      }
      else {
         return false;
      }
   }

   public get reconnecting(): boolean {
      return this.reconnectStopwatch !== null;
   }

   public get bufferReady(): boolean {
      if (!this.connected) {
         debug('Squint.bufferReady() called after websocket was disconnected');
         return false;
      }

      // @ts-ignore: cannot be null - we check above
      return this.ss.bufferedAmount === 0;
   }

   public get connectionInfo(): IConnectionInfoBasic {
      return {
         connectionId: this.connectionId,
         userName: this.userName,
      }
   }

   public get connectionId(): string {
      return (this.ss !== null) ? this.ss.connectionId : 'WebSocket not connected'
   }

   public get remoteCameraPaused(): boolean {
      return this._remoteCameraPaused;
   }

   public get remoteCameraConnected(): boolean {
      return this._remoteCameraConnected;
   }

   public constructor() {
      this._modelTimer = new SquintModelTimer(this);
   }

   public on(handler: ISquintEventHandler): void {
      this.eventManager.on(handler.event, handler.handler);
   }

   public remove(handler: ISquintEventHandler): void {
      this.eventManager.remove(handler.event, handler.handler);
   }

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   private emit(name: SquintEvent, ...args: any[]) {
      this.eventManager.emit(name, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[8], args[9]);
   }

   private processMessage(msg: ISquintMessage) {
      switch (msg.subject) {
         case SquintMessageSubject.CameraPaused: {
            this._remoteCameraPaused = true;
            this.eventManager.emit(SquintEvent.CameraPaused);
         }
            break;

         case SquintMessageSubject.CameraRequest: {
            this.emit(SquintEvent.CameraRequest, msg.resolution, msg.jpegQuality);
         }
            break;

         case SquintMessageSubject.ChatMessage: {
            this.emit(SquintEvent.ChatMessage, msg.connection, msg.message);
         }
            break;

         case SquintMessageSubject.ConnectionInfoUpdate: {
            this.emit(
               SquintEvent.ConnectionInfoUpdate,
               {
                  userName: msg.userName,
                  connectionId: msg.connectionId,
               }
            );
         }
            break;

         case SquintMessageSubject.HostChanged: {
            this.emit(SquintEvent.HostChanged, msg.newHostConnectionId);
         }
            break;

         case SquintMessageSubject.HostDisconnected: {
            this._remoteCameraConnected = false;
            this.emit(SquintEvent.HostDisconnected);
         }
            break;

         case SquintMessageSubject.SessionCreated: {
            switch (msg.status) {
               case CreateSessionStatus.Success:
                  this.requests.resolve(msg.requestId, msg.sessionId);
                  this.emit(SquintEvent.SynchronizeTimer, msg.timerInfo);
                  break;

               case CreateSessionStatus.AlreadyInASession:
                  this.requests.reject(msg.requestId, SquintStrings.CANNOT_CREATE_SESSION__IN_SESSION);
                  break;

               default:
                  // @ts-ignore TS2339: Property 'XXX' does not exist on type 'never'
                  this.requests.reject(msg.requestId, SquintStrings.CANNOT_CREATE_SESSION(msg.status));
                  break;
            }
         }
            break;

         case SquintMessageSubject.SessionJoined: {
            switch (msg.status) {
               case JoinSessionStatus.Success:
                  this.requests.resolve(msg.requestId);
                  this.emit(SquintEvent.SynchronizeTimer, msg.timerInfo);
                  break;

               case JoinSessionStatus.AlreadyInASession:
                  this.requests.reject(msg.requestId, SquintStrings.CANNOT_JOIN_SESSION__IN_SESSION);
                  break;

               case JoinSessionStatus.SessionNotFound:
                  this.requests.reject(msg.requestId, SquintStrings.CANNOT_JOIN_SESSION__SESSION_NOT_FOUND);
                  break;

               case JoinSessionStatus.InvalidPassword:
                  this.requests.reject(msg.requestId, SquintStrings.CANNOT_JOIN_SESSION__INVALID_PASSWORD);
                  break;

               default:
                  // @ts-ignore TS2339: Property 'XXX' does not exist on type 'never'
                  this.requests.reject(msg.requestId, SquintStrings.CANNOT_JOIN_SESSION(msg.status));
                  break;
            }
         }
            break;

         case SquintMessageSubject.SessionList: {
            this.emit(SquintEvent.SessionList, msg.sessions);
         }
            break;

         case SquintMessageSubject.SessionInfo: {
            this.emit(SquintEvent.SessionInfo, msg.info);
         }
            break;

         case SquintMessageSubject.SynchronizeTimer: {
            this.emit(SquintEvent.SynchronizeTimer, msg.info);
         }
            break;

         case undefined:
            console.error('Invalid Message: \'subject\' not found.\n' + JSON.stringify(msg, null, ' '));
            break;

         default:
            console.error('Invalid Message: unknown \'subject\'.\n' + JSON.stringify(msg, null, ' '));
            break;
      }
   }

   private retryCount: number;
   private tryToReconnect(connectionId: string): void {

      if (this.reconnectStopwatch === null) {
         this.reconnectStopwatch = new Stopwatch();
         this.retryCount = 1;
         this.emit(SquintEvent.Reconnecting);
      }
      else {
         this.retryCount++;
      }

      console.log(this + ' Reconnect try ' + this.retryCount)
      this.doConnect(connectionId)
         .then(() => {
            this.reconnectStopwatch = null;
            this.emit(SquintEvent.Reconnected, true);
         })
         .catch((err) => {
            console.log(this + ' Reconnect try ' + this.retryCount + ' failed: ' + err);
            if (typeof err === 'string' && err.endsWith('Server rejected the request.')) {
               console.log(this + ' Unable to reconnect, server rejected the request.');
               this.reconnectStopwatch = null;
               this.ss = null;
               this.emit(SquintEvent.Reconnected, false);
               this.emit(SquintEvent.Close);
            }
            else if (this.reconnectStopwatch.elapsedS < this.ReconnectTimeoutS) {
               setTimeout(() => {
                  this.tryToReconnect(connectionId);
               }, 1000 * this.ReconnectRetryDelayS);
            }
            else {
               console.log(this + ' Unable to reconnect.');
               this.reconnectStopwatch = null;
               this.ss = null;
               this.emit(SquintEvent.Reconnected, false);
               this.emit(SquintEvent.Close);
            }
         });
   }

   public connect(url: string, userName: string): Promise<void> {

      this._userName = userName;
      this._url = url;
      this._remoteCameraConnected = true;
      this._remoteCameraPaused = false;
      return this.doConnect();
   }

   private doConnect(reconnectId?: string): Promise<void> {

      if (this.connected) {
         debug('Connecting even though previous connection is still open');
         return Promise.reject('Cannot connect to server: previous connection is still open');
      }

      let onMessage = (msg: ISquintMessage) => {
         if (!this.ss.connected) {
            debug('ws.onMessage() message received, but socket not open');
         }

         // process the image
         this.processMessage(msg);
      };

      let onImage = (blob: Blob) => {
         if (!this.ss.connected) {
            debug('ss.onImage() message received, but socket not open');
         }

         this._remoteCameraPaused = false;
         this._remoteCameraConnected = true;
         this.emit(SquintEvent.Image, blob);
      }

      let onClose = (code: number) => {
         const connectionId = this.ss.connectionId;
         if (code === SquintSocket.CLOSE_CODE_NORMAL) {
            this.ss = null;
            this.emit(SquintEvent.Close);
         }
         else if (code === Squint.CLOSE_CODE_FAIL_NO_RECONNECT) {
            this.ss = null;
            this.emit(SquintEvent.Close);
         }
         else {
            console.log(this + ' WebSocket closed with code: ' + code + ', trying to reconnect');
            this.tryToReconnect(connectionId);
         }
      }

      return SquintSocket.connect(
         this._url,
         this.userName,
         onMessage,
         onImage,
         onClose,
         (ss) => { this.ss = ss; },
         reconnectId,
      ) as unknown as Promise<void>;
   }

   public close(): void {
      if (!this.connected) {
         debug('Squint.close() called but no connection exists');
         return;
      }

      // @ts-ignore: cannot be null - we check above
      this.ss.close();
      this.ss = null;

      this.emit(SquintEvent.Close);
   }

   private send(msg: ISquintMessage) {
      if (!this.connected) {
         debug('Squint.send() called, but not connected: ' + JSON.stringify(msg));
         return;
      }

      // @ts-ignore: cannot be null - we check above
      this.ss.send(msg);
   }

   public sendImage(blob: Blob): void {
      if (!this.connected) {
         debug('Squint.sendImage() called, but not connected');
         return;
      }

      if (this.bufferReady) {
         // @ts-ignore: cannot be null - we check above
         this.ss.sendImage(blob);
      }
      else {
         // @ts-ignore: cannot be null - we check above
         // TODO figure out what this happens
         // console.error('Skipping upload, buffer not empty: ' + this.ss.bufferedAmount);
      }
   }

   public requestNextImage(): void {
      this.send({
         subject: SquintMessageSubject.ReadyForNextImage,
      });
   }

   public createSession(password?: string, timeoutMs = 5000): Promise<string> {

      if (password && password.trim().length === 0) {
         password = undefined;
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      let id = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

      this.send({
         subject: SquintMessageSubject.CreateSession,
         requestId: id,
         password
      });

      return new Promise<string>((resolve, reject) => {
         this.requests.put(id, timeoutMs, resolve, reject, SquintStrings.CANNOT_CREATE_SESSION__TIMEOUT);
      })
   }

   public joinSession(sessionId: string, password?: string, timeoutMs = 5000): Promise<boolean> {

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      let id = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

      this.send({
         subject: SquintMessageSubject.JoinSession,
         requestId: id,
         sessionId,
         password,
      });

      return new Promise<boolean>((resolve, reject) => {
         this.requests.put(id, timeoutMs, resolve, reject, SquintStrings.CANNOT_JOIN_SESSION__TIMEOUT);
      })
   }

   private updateConnectionInfo(userName: string): void {
      this._userName = userName;
      this.send({
         subject: SquintMessageSubject.ConnectionInfoUpdate,
         userName: this.connectionInfo.userName,
         connectionId: this.connectionInfo.connectionId,
      })
   }

   public sendChatMessage(msg: string): void {
      this.send({
         subject: SquintMessageSubject.ChatMessage,
         message: msg,
         connection: this.connectionInfo,
      });
   }

   public log(msg: string): void {
      if (this.connected) {
         this.send({
            subject: SquintMessageSubject.Log,
            message: msg,
         });
      }
   }

   public sendCameraRequest(resolution: number, jpegQuality: number): void {
      this.send({
         subject: SquintMessageSubject.CameraRequest,
         resolution,
         jpegQuality,
      })
   }

   public cameraPaused(): void {
      this.send({
         subject: SquintMessageSubject.CameraPaused,
      })
   }

   public requestToBeHost(): void {
      this.send({
         subject: SquintMessageSubject.HostChangeRequest
      });

      // reset flags
      this._remoteCameraConnected = true;
      this._remoteCameraPaused = false;
   }

   public synchronizeTimer(info?: ITimerInfo): void {
      this.send({
         subject: SquintMessageSubject.SynchronizeTimer,
         info,
      });

   }

   public static inspect(url: string): Promise<ISquintInfo> {
      return new Promise<ISquintInfo>((resolve, reject) => {
         let ws = WebSocketFactory.create(url);

         ws.onopen = () => {
            ws.send('inspect');
         }

         ws.onmessage = (msg) => {
            ws.onopen = null;
            //ws.onclose = null;
            ws.onerror = null;
            ws.onmessage = null;

            try {
               resolve(JSON.parse(msg.data));
            }
            catch (err) {
               reject('Invalid inspect response: ' + err + '\n' +
                  'Message: ' + msg.data);
            }
         }

         ws.onclose = (event: CloseEvent) => {
            reject('WebSocket closed with code ' + event.code);
         }

         ws.onerror = () => {
            reject('WebSocket error');
         }
      });
   }

   public static dump(url: string): Promise<string> {
      return new Promise<string>((resolve, reject) => {
         let ws = WebSocketFactory.create(url);

         ws.onopen = () => {
            ws.send('dump');
         }

         ws.onmessage = (msg) => {
            ws.onopen = null;
            ws.onclose = null;
            ws.onerror = null;
            ws.onmessage = null;

            resolve(msg.data);
         }

         ws.onclose = (event: CloseEvent) => {
            reject('WebSocket closed with code ' + event.code);
         }

         ws.onerror = () => {
            reject('WebSocket error');
         }
      });
   }

   public static log(url: string, msg: string): void {

      let ws = WebSocketFactory.create(url);

      ws.onopen = () => {
         ws.send('log ' + msg);
      }
   }

   public toString(): string {
      if (this.ss) {
         return '[' + this.ss.readyStateStr + ']';
      }
      else {
         return '[websocket=null]';
      }
   }
}