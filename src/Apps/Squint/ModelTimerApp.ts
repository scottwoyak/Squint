import 'webrtc-adapter';
import { IApp } from '../../IApp';
import { Menubar } from '../../GUI/Menu';
import { Version } from './Version';
import { SquintModelTimer } from './SquintModelTimer';
import { ModelTimerPanel } from './ModelTimerPanel';
import { Sounds, SpookySounds } from './Sounds';
import { isMobile } from '../../Util/Globals';
import { GUI } from '../../GUI/GUI';
import NoSleep from 'nosleep.js';

export class ModelTimerApp implements IApp {

   private noSleep = new NoSleep();

   private timerPanel: ModelTimerPanel;

   public constructor() {
      document.title += (' ' + Version.Build);
   }

   public create(div: HTMLDivElement): void {

      div.id = 'ModelTimerApp';

      let bodyDiv = GUI.create('div', 'BodyDiv', div);

      let timer = new SquintModelTimer();
      this.timerPanel = new ModelTimerPanel(timer, bodyDiv)
      this.timerPanel.goFullScreenOnStart = isMobile;
      this.timerPanel.autoStart = true;

      window.addEventListener('resize', () => {
         this.timerPanel.draw();
      });

      document.body.addEventListener('mousedown', () => {
         this.noSleep.enable();
      });
      document.body.addEventListener('touchstart', () => {
         this.noSleep.enable();
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

      const spookySoundsMenu = soundMenu.addSubMenu('Spooky');
      for (let soundStr in SpookySounds) {
         const sound: SpookySounds = SpookySounds[soundStr as keyof typeof SpookySounds];
         spookySoundsMenu.addRadiobutton({
            label: soundStr.replace('_', ' '),
            group: 'Sounds',
            checked: this.timerPanel.sound === sound,
            oncheck: () => {
               this.timerPanel.sound = sound;
               this.timerPanel.testSound();
            }
         });
      }

      /*
      const posesMenu = menubar.addSubMenu('Poses');
      posesMenu.addRadiobutton({
         label: '20 Min (default)',
         group: 'Poses',
         checked: true,
         oncheck: () => {
            this.timerPanel.poses = [];
         }
      });
      posesMenu.addRadiobutton({
         label: '10, 10',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poses = [10, 10];
         }
      });
      posesMenu.addRadiobutton({
         label: '5, 5, 10',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poses = [5, 5, 10];
         }
      });
      posesMenu.addRadiobutton({
         label: '5, 5, 5, 5',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poses = [5, 5, 5, 5];
         }
      });
      posesMenu.addRadiobutton({
         label: '10 x 2',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poses = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
         }
      });
      posesMenu.addRadiobutton({
         label: '20 x 1',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poses = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
         }
      });
   */
   }
}
