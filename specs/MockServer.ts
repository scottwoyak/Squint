import { Server, WebSocket as MockWebSocket } from 'mock-socket';
import { SquintMessageSubject, ISquintMessage, ISquintHelloFromClientMessage, ReconnectedStatus, ISquintReconnectedMessage } from '../src/Apps/Squint/SquintMessage';

export enum ReconnectAction {
   Accept,
   RejectAsExpired,
   RejectAsFailed
}

interface CloseData {
   code: number,
   reason?: string,
}

interface IOSocket {
   close(closeData?: CloseData): void;
   send(data: string): void;
   on(event: string, data: any): void;
}

export class MockServer {
   private mockServer: Server;
   public connections: MockConnection[] = [];
   public connectionAttempts = 0;
   public reconnectionAttempts = 0;
   public reconnectAction = ReconnectAction.Accept

   public constructor(url: string) {
      this.mockServer = new Server(url);

      // TODO fix type for mockSocket
      this.mockServer.on('connection', (mockSocket: any) => {


         // something is screwed up with mock-socket. The socket object here
         // is an IOSocket object, not one of their WebSocket objects
         let socket = mockSocket as any as IOSocket;
         let hello = (msg: string) => {

            let sMsg = JSON.parse(msg) as ISquintMessage;
            if (sMsg.subject === 'Hello') {


               sMsg = sMsg as ISquintHelloFromClientMessage;
               if (sMsg.reconnectId && sMsg.reconnectId) {
                  this.reconnectionAttempts++;
                  switch (this.reconnectAction) {
                     case ReconnectAction.RejectAsFailed:
                        // simulate network no available
                        socket.close({ code: 1005 });
                        break;

                     case ReconnectAction.RejectAsExpired:
                        {
                           // simulate connection after Zombie expiration
                           let msg: ISquintReconnectedMessage = {
                              subject: SquintMessageSubject.Reconnected,
                              status: ReconnectedStatus.Failed
                           };
                           socket.send(JSON.stringify(msg));
                           //socket.close();
                        }
                        break;

                     case ReconnectAction.Accept:
                        {
                           // simulate success
                           let msg: ISquintReconnectedMessage = {
                              subject: SquintMessageSubject.Reconnected,
                              status: ReconnectedStatus.Success
                           };
                           socket.send(JSON.stringify(msg));
                           this.connections.push(new MockConnection(this, socket));
                        }
                        break;
                  }
               }
               else {
                  this.connectionAttempts++;
                  socket.send(JSON.stringify({
                     subject: SquintMessageSubject.Hello,
                     version: '0.1',
                     connectionId: 'MockConnectionId',
                  }, null, ' '));

                  //socket.removeEventListener('message', <any>hello);

                  this.connections.push(new MockConnection(this, socket));
               }
            }
            else {
               socket.close({ code: 3000 });
            }
         }
         socket.on('message', hello);
      });
   }

   public close(code = 1000): void {
      this.mockServer.close({ code, reason: '', wasClean: true });
      this.connections = [];
   }

   public removeConnection(connection: MockConnection): void {
      this.connections = this.connections.filter((con) => { con != connection })
   }
}

export class MockConnection {
   private server: MockServer;
   private ws: IOSocket;

   private send(msg: ISquintMessage) {
      this.ws.send(JSON.stringify(msg, null, ' '));
   }

   public constructor(server: MockServer, socket: IOSocket) {
      this.server = server;
      this.ws = socket;

      this.ws.on('message', (msg: string) => {
         let sMsg = JSON.parse(msg) as ISquintMessage;
         switch (sMsg.subject) {
            case SquintMessageSubject.Log:
               break;
         }
      });

      this.ws.on('close', () => {
         this.server.removeConnection(this);
      });
   }

   public close(code = 1000): void {
      this.server.removeConnection(this);

      // bug in mock-socket. Type returned when a connection is created is not a WebSocket. It's
      // something else that takes an 'options' object for the close function
      this.ws.close({ code });
   }
}

