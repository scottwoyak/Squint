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
import { Slider } from '../../GUI/Slider';
import { Checkbox } from '../../GUI/Checkbox';

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

      soundMenu.addCheckbox({
         label: 'Announce time remaining',
         checked: true,
         oncheck: (checkbox: Checkbox) => {
            this.timerPanel.announceTimeRemaining = checkbox.checked;
         }
      });
      soundMenu.addLabel('');


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






      const poseMenu = menubar.addSubMenu('Poses');

      poseMenu.addSlider({
         label: 'Pose Length (minutes)',
         min: 10,
         max: 25,
         value: 20,
         onGetText: (slider: Slider) => {
            return Math.round(slider.value).toString();
         },
         oninput: (slider: Slider) => {
            this.timerPanel.poseMs = Math.round(slider.value) * TimeMs.Min;
         },
      });

      poseMenu.addSlider({
         label: 'Break Length (minutes)',
         min: 5,
         max: 15,
         value: 7,
         onGetText: (slider: Slider) => {
            return Math.round(slider.value).toString();
         },
         oninput: (slider: Slider) => {
            this.timerPanel.breakMs = Math.round(slider.value) * TimeMs.Min;
         },
      });

      poseMenu.addLabel('');
      poseMenu.addLabel('Pose Types');
      poseMenu.addRadiobutton({
         label: 'One Pose (default)',
         group: 'Poses',
         checked: true,
         oncheck: () => {
            this.timerPanel.poseLengthsM = [];
         }
      });
      poseMenu.addRadiobutton({
         label: '20 x 1 Minute',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poseLengthsM = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
         }
      });
      poseMenu.addRadiobutton({
         label: '10 x 1 Minute, 5 x 2 Minutes',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poseLengthsM = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
         }
      });
      poseMenu.addRadiobutton({
         label: '10 x 2 Minutes',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poseLengthsM = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
         }
      });
      poseMenu.addRadiobutton({
         label: '5, 5, 5, 5 Minutes',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poseLengthsM = [5, 5, 5, 5];
         }
      });
      poseMenu.addRadiobutton({
         label: '5, 5, 10 Minutes',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poseLengthsM = [5, 5, 10];
         }
      });
      poseMenu.addRadiobutton({
         label: '10, 10 Minutes',
         group: 'Poses',
         checked: false,
         oncheck: () => {
            this.timerPanel.poseLengthsM = [10, 10];
         }
      });
   }
}
