import { ISliderSetup, Slider } from './Slider';
import { Checkbox, ICheckboxSetup } from './Checkbox';
import { ICtrl } from './ICtrl';
import { IRadiobuttonSetup, Radiobutton } from './Radiobutton';
import { isMobile } from '../Util/Globals';
import { GUI } from './GUI';

export type MenuItemFunction = (item?: HTMLDivElement) => void;
export type MenuItemFunctionBool = (value: boolean) => void;

enum MenuLocation {
   Below,
   Right,
}

export interface IMenuItemOptions {
   closeOnClick: boolean;
}

/**
 * Common base classes for things that are menus - menubar, pulldown menu, etc
 */
class Menu {
   private parent: Menu | null = null;
   private children: Menu[] = [];
   private ctrls: ICtrl[] = [];

   // the div that is the container for menu items
   public div: HTMLDivElement;

   // the item that launches us
   private parentItem: HTMLDivElement | null = null;

   public set hidden(flag: boolean) {
      if (this.parentItem) {
         if (flag) {
            this.parentItem.classList.add('MenuItemHiddenClass');
         }
         else {
            this.parentItem.classList.remove('MenuItemHiddenClass');
         }
      }
   }

   public get hidden(): boolean {
      if (this.parentItem) {
         return this.parentItem.classList.contains('MenuItemHiddenClass');
      }
      else {
         return false;
      }
   }

   public set enabled(flag: boolean) {
      if (this.parentItem) {
         if (flag) {
            this.parentItem.classList.remove('MenuItemDisabledClass');
         }
         else {
            this.parentItem.classList.add('MenuItemDisabledClass');
         }
      }
   }

   public get enabled(): boolean {
      if (this.parentItem) {
         return !this.parentItem.classList.contains('MenuItemDisabledClass');
      }
      else {
         return true;
      }
   }

   protected constructor(
      parent: Menu | null,
      parentItem: HTMLDivElement | null,
      id: string,
      className: string
   ) {
      this.parent = parent;
      this.parentItem = parentItem;

      this.div = document.createElement('div');
      this.div.id = id;
      this.div.className = className;

      if (parent) {
         parent.div.appendChild(this.div);
      }

      if (!parent) {
         // if this is the root menu, add a global click handler for closing menus
         window.addEventListener('mousedown', (event: MouseEvent) => {
            if (!this.isMenuItem(event.target as HTMLElement)) {
               this.hideDown();
            }
         });

         window.addEventListener('touchstart', (event: TouchEvent) => {
            if (!this.isMenuItem(event.target as HTMLElement)) {
               this.hideDown();
            }
         });
      }
   }

   protected isMenuItem(element: HTMLElement | null): boolean {
      while (element) {
         if (element.className === 'MenuItem') {
            return true;
         }
         element = element.parentElement;
      }
      return false;
   }

   public show() {
      this.ctrls.forEach((ctrl) => ctrl.refresh());
      if (this.div.classList.contains('MenuShow') === false) {
         this.div.classList.add('MenuShow');
      }
   }

   public hide() {
      if (this.div.classList.contains('MenuShow')) {
         this.div.classList.remove('MenuShow');
      }
   }

   public hideUp() {
      let menu = this as Menu;
      while (menu.parent) {
         menu.hide();
         menu = menu.parent;
      }
   }

   public hideDown() {
      this.children.forEach((child) => {
         child.hide();
         child.hideDown();
      });
   }

   public clear() {
      this.children = [];
      this.ctrls = [];
      this.div.innerHTML = '';
   }

   protected internalAddSubMenu(innerHtml: string, id: string, location: MenuLocation): SubMenu {

      const item = document.createElement('div');
      item.id = id + 'MenuItem';
      item.className = 'MenuItem';
      item.innerHTML = innerHtml;

      item.onclick = () => {
         this.showSubMenu(item, subMenu, location);
      }
      this.div.appendChild(item);

      const subMenu = new SubMenu(this, item, id);
      this.children.push(subMenu);
      return subMenu;
   }

   protected showSubMenu(menuItem: HTMLDivElement, subMenu: SubMenu, location: MenuLocation) {

      if (subMenu.enabled === false) {
         return;
      }

      // position the menu off screen so that we can query it's height when
      // we make it visible. Then position it properly
      subMenu.div.style.left = -500 + 'px'
      subMenu.div.style.top = 0 + 'px'

      // hide sibling menus that are open
      this.hideDown();

      // show the desired submenu
      subMenu.show();

      // position the new menu
      const browserWidth = document.documentElement.clientWidth;
      const browserHeight = document.documentElement.clientHeight;
      const menuItemRect = menuItem.getBoundingClientRect();
      const subMenuRect = subMenu.div.getBoundingClientRect();
      if (location === MenuLocation.Below) {
         subMenu.div.style.left = menuItemRect.left + 'px'
         subMenu.div.style.top = menuItemRect.bottom + 'px'
      }
      else if (location === MenuLocation.Right) {

         let left = menuItemRect.left + 0.5 * menuItemRect.width;
         if (left + subMenuRect.width > browserWidth) {
            left = menuItemRect.left - subMenuRect.width;
         }
         subMenu.div.style.left = left + 'px';

         let top = menuItemRect.top;
         if (top + subMenuRect.height > browserHeight) {
            top = browserHeight - subMenuRect.height;
         }
         subMenu.div.style.top = top + 'px'
      }
   }

   public addItem(text: string, callback: MenuItemFunction, options?: IMenuItemOptions): HTMLDivElement {

      // create a div for this item
      const item = document.createElement('div');
      item.className = 'MenuItem';
      item.innerText = text;

      item.onclick = (event: Event) => {

         // hide open menus in our hierarchy
         if (!(options && options.closeOnClick == false)) {
            this.hideUp();
         }

         // fire the event
         callback(item);
      }
      this.div.appendChild(item);

      item.onmouseenter = () => {
         this.hideDown();
      }

      return item;
   }

   public addSlider(setup: ISliderSetup): Slider {
      const div = this.addItem(
         setup.label,
         () => { return; }, // do nothing on click
         { closeOnClick: false }
      );

      const ctrl = new Slider(div, setup);
      this.ctrls.push(ctrl);

      return ctrl;
   }

   public addCheckbox(setup: ICheckboxSetup): Checkbox {
      const div = this.addItem(
         '',
         () => { return }, // do nothing on click
         { closeOnClick: false }
      );

      const ctrl = new Checkbox(div, setup);
      this.ctrls.push(ctrl);

      return ctrl;
   }

   public addRadiobutton(setup: IRadiobuttonSetup): Radiobutton {
      const div = this.addItem(
         '',
         () => { return }, // do nothing on click
         { closeOnClick: false }
      );

      const ctrl = new Radiobutton(div, setup);
      this.ctrls.push(ctrl);

      return ctrl;
   }

   public addLabel(text: string): HTMLDivElement {
      const div = this.addItem(
         '',
         null,
      );
      div.classList.add('LabelMenuItem');
      div.innerText = text;

      return div;
   }

   public addImage(src: string, callback: MenuItemFunction): HTMLImageElement {
      const div = this.addItem(
         '',
         callback
      );
      div.classList.add('ImageMenuItem');

      const img = GUI.create('img', '', div);
      img.className = 'MenuItemImage';
      img.src = src;
      return img;
   }
}







/**
 * Horizontal menubar across the top of the screen
 */
export class Menubar extends Menu {
   public constructor(parent: HTMLElement) {
      super(null, null, 'Menubar', 'Menubar');
      parent.appendChild(this.div);
   }

   public addSubMenu(text: string, id?: string): SubMenu {

      return this.internalAddSubMenu(text, id ?? (text + 'Menu'), MenuLocation.Below);
   }
}









/**
 * A child menu of a menu, i.e. the item that appears when you click on something in the menubar
 */
export class SubMenu extends Menu {

   public constructor(parent: Menu, parentItem: HTMLDivElement, id: string) {
      super(parent, parentItem, id + 'Menu', 'Menu');
   }

   public addSubMenu(text: string, id?: string): SubMenu {

      if (!id) {
         id = text.replace(/\s+/g, '');
      }

      const spanId = id + 'Span';
      const subMenu = this.internalAddSubMenu(text + '<span id="' + spanId + '" style="float:right">></span>', id, MenuLocation.Right);

      const span = document.getElementById(spanId) as HTMLSpanElement;
      const div = span.parentElement as HTMLDivElement;
      div.onmouseenter = () => {
         if (isMobile === false) {
            // TODO this event is triggering on a touchscreen laptop when we don't want it to.
            this.hideDown();
            this.showSubMenu(div, subMenu, MenuLocation.Right);
         }
      };

      return subMenu;
   }
}