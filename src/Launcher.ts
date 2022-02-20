/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { IApp } from './IApp';
import { Menubar } from './GUI/Menu';
import { PathTracerApp } from './Apps/PathTracer/PathTracerApp';
import { ViewerApp } from './Apps/Viewer/ViewerApp';
import { SquintApp } from './Apps/Squint/SquintApp';
import { baseUrl } from './Util/Globals';
import { SeeApp } from './Apps/Squint/ArtSeeApp';
import { Device } from './Util/Device';
import { ModelTimerApp } from './Apps/Squint/ModelTimerApp';
import { Version } from './Apps/Squint/Version';

enum AppType {
   ArtistsBall = 'ArtistsBall',
   Viewer = 'Viewer',
   Squint = 'Squint',
   ArtSee = 'Art-See',
   ModelTimer = 'ModelTimer',
}

interface IParam {
   name: string,
   value: string,
}

export class Launcher {
   private div: HTMLDivElement | undefined;
   private app: IApp | null = null;
   private menubar: Menubar | undefined;

   public constructor() {

      this.setFontSize();
      window.addEventListener('orientationchange', () => this.setFontSize());
      document.addEventListener('fullscreenchange', () => this.setFontSize());

      // default app type if one isn't specified via a URL parameter
      let type = AppType.Squint;

      // create the main div
      this.div = document.createElement('div');
      document.body.appendChild(this.div);

      this.menubar = new Menubar(this.div);
      let html = '<img style="width: 1em" src="' + baseUrl() + 'img/apps.svg' + '" />';
      const subMenu = this.menubar.addSubMenu(html, 'Apps');
      subMenu.addItem('3D Viewer', () => location.href = this.getUrl(AppType.Viewer));
      subMenu.addItem('Squint', () => location.href = this.getUrl(AppType.Squint));
      subMenu.addItem('Artist\'s Ball', () => location.href = this.getUrl(AppType.ArtistsBall));
      subMenu.addItem('Art-See', () => location.href = this.getUrl(AppType.ArtSee));
      subMenu.addItem('ModelTimer', () => location.href = this.getUrl(AppType.ModelTimer));

      const paramString = location.href.split('?')[1];
      const query = new URLSearchParams(paramString);

      // TODO this can be done without a switch statement, but I
      // don't have time right now to figure out how to make it
      // work with strict TypeScript and ESLint
      const appTypeStr = query.get('App');
      switch (appTypeStr) {
         case AppType.ArtistsBall:
            type = AppType.ArtistsBall;
            break;

         case AppType.Squint:
            type = AppType.Squint;
            break;

         case AppType.Viewer:
            type = AppType.Viewer;
            break;

         case AppType.ArtSee:
            type = AppType.ArtSee;
            break;

         case AppType.ModelTimer:
            type = AppType.ModelTimer;
            break;
      }
      query.delete('App');

      const file = this.getFileFromQuery(query);

      switch (type) {
         case AppType.ArtistsBall:
            document.title = 'Artist\'s Ball';
            this.app = new PathTracerApp(file);
            break;

         case AppType.Viewer:
            document.title = 'Viewer';
            this.app = new ViewerApp(file);
            break;

         case AppType.Squint:
            document.title = 'Squint';
            this.app = new SquintApp();
            break;

         case AppType.ArtSee:
            document.title = 'Art-See';
            this.app = new SeeApp();
            break;

         case AppType.ModelTimer:
            document.title = 'Model Timer';
            this.app = new ModelTimerApp();
            break;
      }
      this.app.create(this.div);
      this.app.buildMenu(this.menubar);

      // TODO move to css?
      let div = this.menubar.addLabel(Version.toString());
      div.style.fontWeight = 'Normal';
      div.style.color = 'rgba(0,0,0, 0.5)';
      div.style.float = 'right';
   }

   private getFileFromQuery(query: URLSearchParams): string {
      const params: IParam[] = [];
      query.forEach((value: string, key: string) => {
         params.push({
            name: key,
            value,
         })
      })

      if (params.length === 1) {
         return params[0].name; // unnamed parameter
      }
      else {
         return '';
      }
   }

   private getUrl(type: AppType): string {
      const base = location.href.split('?')[0];
      switch (type) {
         case AppType.ArtistsBall:
            return base + '?App=ArtistsBall';
            break;

         case AppType.Squint:
            return base + '?App=Squint';
            break;

         case AppType.Viewer:
            return base + '?App=Viewer';
            break;

         case AppType.ArtSee:
            return base + '?App=Art-See';
            break;

         case AppType.ModelTimer:
            return base + '?App=ModelTimer';
            break;

         default:
            return base;
      }
   }

   private setFontSize() {
      // supposed to be able to do this stuff with media queries, but I give up! Browsers
      // behave differently on mobile devices and some alter scaling for portrait and
      // landscape too!
      let device = new Device();

      let fontSize = 14;
      if (device.isFirefox) {
         fontSize = 14;
      }
      else {
         if (device.isMobile && device.isPortrait) {
            if (device.isIPhone) {
               fontSize = 30;
            }
            else {
               fontSize = 24;
            }
         }
         else {
            if (device.isIPhone) {
               fontSize = 16;
            }
            else {
               fontSize = 14;
            }
         }
      }

      if (document.fullscreenElement && device.isPortrait && device.isMobile && device.isSafari === false) {
         fontSize /= 2;
      }

      // set the variable into the CSS code
      document.documentElement.style.setProperty('--fontSize', fontSize + 'pt');

      //alert('setting font size to ' + fontSize + 'pt');
   }
}