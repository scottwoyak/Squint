const NUM_COLS = 150;

export type MessageHandler = (msg: string) => void;

export class ConsoleCapture {

   private textArea: HTMLTextAreaElement;

   // TODO separate this class into two. One for just intercepting console message and
   // one for being a GUI to see it
   public onMessage: MessageHandler | null;

   public get visible(): boolean {
      return getComputedStyle(this.textArea).display === 'block';
   }

   public set visible(flag: boolean) {
      this.textArea.style.display = flag ? 'block' : 'none';
   }

   public constructor(parent: HTMLElement, id = 'Console', numCols = NUM_COLS) {
      this.textArea = document.createElement('textarea');
      this.textArea.id = id;
      this.textArea.cols = numCols;
      parent.appendChild(this.textArea);

      // TODO update these all to take the correct arguments for console functions
      const oldLog = console.log;
      console.log = (msg: string) => {
         this.append(msg);
         oldLog(msg);
      }

      const oldTrace = console.trace;
      console.trace = (msg: string) => {
         this.append('TRACE ' + msg);
         oldTrace(msg);
      }

      const oldInfo = console.info;
      console.info = (msg: string) => {
         this.append('INFO ' + msg);
         oldInfo(msg);
      }

      const oldWarn = console.warn;
      console.warn = (msg: string) => {
         this.append('WARN ' + msg);
         oldWarn(msg);
      }

      const oldError = console.error;
      console.error = (msg: string) => {
         this.append('ERROR ' + msg);
         oldError(msg);
      }

      const oldClear = console.clear;
      console.clear = () => {
         this.textArea.textContent = '';
         oldClear();
      }

      window.onerror = (event: string | Event, source: string, lineno: number, colno: number, error: Error) => {
         const stackTrace = error && error instanceof Error ? '\n' + error.stack : '';
         const msg = event + '\n' + source + ' line:' + lineno + ', col:' + colno + stackTrace;
         //alert(msg);
         this.append(msg);
      }
   }

   private append(msg: string) {
      let fullmsg = this.textArea.value;

      if (msg === null || msg === undefined) {
         msg = '' + msg;
      }

      if (typeof msg !== 'string') {
         msg = '' + msg;
      }

      msg = msg.substr(0, 100 * NUM_COLS)
      fullmsg = msg + '\n\n' + fullmsg;
      fullmsg = fullmsg.substr(0, 10 * 1000 * NUM_COLS);

      this.textArea.value = fullmsg;

      if (this.onMessage) {
         this.onMessage(msg);
      }
   }
}