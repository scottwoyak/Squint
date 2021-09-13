import 'webrtc-adapter';
import { IApp } from '../../IApp';
import { Menubar } from '../../GUI/Menu';
import { Version } from './Version';
import { ModelTimer } from './ModelTimer';
import { ModelTimerPanel } from './ModelTimerPanel';
import { Sounds } from './Sounds';
import { isMobile } from '../../Util/Globals';
import { GUI } from '../../GUI/GUI';
import { Checkbox } from '../../GUI/Checkbox';
import NoSleep from 'nosleep.js';

export class ModelTimerApp implements IApp {

   private noSleep = new NoSleep();
   private noSleepEnabled = false;

   private timerPanel: ModelTimerPanel;

   public constructor() {
      document.title += (' ' + Version.Build);
   }

   public create(div: HTMLDivElement): void {

      div.id = 'ModelTimerApp';

      let bodyDiv = GUI.create('div', 'BodyDiv', div);

      let timer = new ModelTimer();
      this.timerPanel = new ModelTimerPanel(timer, bodyDiv)
      this.timerPanel.goFullScreenOnStart = isMobile;
      this.timerPanel.autoStart = true;

      window.addEventListener('resize', () => {
         this.timerPanel.draw();
      });

      document.body.addEventListener('mousedown', () => {
         if (this.noSleepEnabled === false) {
            this.noSleep.enable();
            this.noSleepEnabled = true;
         }
      });
      document.body.addEventListener('touchstart', () => {
         if (this.noSleepEnabled === false) {
            this.noSleep.enable();
            this.noSleepEnabled = true;
         }
      });

      this.timerPanel.draw();

   }

   public buildMenu(menubar: Menubar): void {

      const soundMenu = menubar.addSubMenu('Sounds');
      for (let soundStr in Sounds) {
         const sound: Sounds = Sounds[soundStr as keyof typeof Sounds];
         soundMenu.addRadiobutton({
            label: soundStr.replace('_', ' '),
            group: 'Sounds',
            checked: this.timerPanel.sound === sound,
            oncheck: () => {
               this.timerPanel.sound = sound;
               this.timerPanel.testSound();
            }
         });
      }

      const alertsMenu = menubar.addSubMenu('Alerts');
      alertsMenu.addCheckbox({
         label: 'Play Timer Started Alerts',
         checked: this.timerPanel.playTimerStartedAlerts,
         oncheck: (box: Checkbox) => {
            this.timerPanel.playTimerStartedAlerts = box.checked;
         }
      });
      alertsMenu.addCheckbox({
         label: 'Play Time Remaining Alerts',
         checked: this.timerPanel.playTimeRemainingAlerts,
         oncheck: (box: Checkbox) => {
            this.timerPanel.playTimeRemainingAlerts = box.checked;
         }
      });

   }
}
