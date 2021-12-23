import 'webrtc-adapter';
import { IApp } from '../../IApp';
import { Menubar } from '../../GUI/Menu';
import { Version } from './Version';
import { ModelTimer } from './ModelTimer';
import { ModelTimerPanel } from './ModelTimerPanel';
import { Sounds, SpookySounds } from './Sounds';
import { isMobile } from '../../Util/Globals';
import { GUI } from '../../GUI/GUI';
import NoSleep from 'nosleep.js';
import { TimeMs } from './TimeMs';

export class ModelTimerApp implements IApp {

   private noSleep = new NoSleep();

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

      const posesMenu = menubar.addSubMenu('Poses');
      posesMenu.addRadiobutton({
         label: 'One Pose (default)',
         group: 'Poses',
         checked: true,
         oncheck: () => {
            this.timerPanel.poseLengthsM = [];
         }
      });
      posesMenu.addRadiobutton({
         label: '20 x 1',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poseLengthsM = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
         }
      });
      posesMenu.addRadiobutton({
         label: '10 x 1, 5 x 2',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poseLengthsM = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
         }
      });
      posesMenu.addRadiobutton({
         label: '10 x 2',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poseLengthsM = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
         }
      });
      posesMenu.addRadiobutton({
         label: '5, 5, 5, 5',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poseLengthsM = [5, 5, 5, 5];
         }
      });
      posesMenu.addRadiobutton({
         label: '5, 5, 10',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poseLengthsM = [5, 5, 10];
         }
      });
      posesMenu.addRadiobutton({
         label: '10, 10',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poseLengthsM = [10, 10];
         }
      });


      const timingMenu = menubar.addSubMenu('Timing');

      let poseLengthSubMenu = timingMenu.addSubMenu('Poses');
      poseLengthSubMenu.addRadiobutton({
         label: '15 Minutes',
         group: 'PoseLength',
         checked: false,
         oncheck: () => {
            this.timerPanel.poseMs = 15 * TimeMs.Min;
         }
      });
      poseLengthSubMenu.addRadiobutton({
         label: '20 Minutes',
         group: 'PoseLength',
         checked: true,
         oncheck: () => {
            this.timerPanel.poseMs = 20 * TimeMs.Min;
         }
      });
      poseLengthSubMenu.addRadiobutton({
         label: '25 Minutes',
         group: 'PoseLength',
         checked: false,
         oncheck: () => {
            this.timerPanel.poseMs = 25 * TimeMs.Min;
         }
      });

      let breakLengthSubMenu = timingMenu.addSubMenu('Breaks');
      breakLengthSubMenu.addRadiobutton({
         label: '5 Minutes',
         group: 'BreakLength',
         checked: false,
         oncheck: () => {
            this.timerPanel.breakMs = 5 * TimeMs.Min;
         }
      });
      breakLengthSubMenu.addRadiobutton({
         label: '7 Minutes',
         group: 'BreakLength',
         checked: true,
         oncheck: () => {
            this.timerPanel.breakMs = 7 * TimeMs.Min;
         }
      });
      breakLengthSubMenu.addRadiobutton({
         label: '10 Minutes',
         group: 'BreakLength',
         checked: false,
         oncheck: () => {
            this.timerPanel.breakMs = 10 * TimeMs.Min;
         }
      });
   }
}
