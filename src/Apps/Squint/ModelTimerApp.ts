import 'webrtc-adapter';
import { IApp } from '../../IApp';
import { Menubar } from '../../GUI/Menu';
import { Version } from './Version';
import { ModelTimer } from './ModelTimer';
import { ModelTimerPanel } from './ModelTimerPanel';
import { Sounds } from './Sounds';
import { isMobile } from '../../Util/Globals';
import { GUI } from '../../GUI/GUI';

export class ModelTimerApp implements IApp {

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
               this.timerPanel.playSound();
            }
         });
      }

      /*
      const posesMenu = menubar.addSubMenu('Poses');
      posesMenu.addCheckbox({
         label: '1\'s (20)',
         checked: false,
      });
      posesMenu.addCheckbox({
         label: '1\'s (10) and 2\'s (5)',
         checked: false,
      });
      posesMenu.addCheckbox({
         label: '5\'s (4)',
         checked: false,
      });
      posesMenu.addCheckbox({
         label: '5\'s (2) and 10\'s (1)',
         checked: false,
      });
      posesMenu.addCheckbox({
         label: '10\'s (2)',
         checked: false,
      });
      posesMenu.addCheckbox({
         label: '20 min',
         checked: true,
      });
      */
   }
}
