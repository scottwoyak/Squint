import { Color } from '../Util/Color';
import { clamp } from '../Util/Globals';
import { htmlColor } from '../Util/htmlColor';

/**
 * Color class that requires RGB values to be between 0 and 1
 */
export class glColor3 extends Color {

   static readonly modelWhite = new glColor3([255 / 255, 250 / 255, 242 / 255]);
   static readonly modelBlack = new glColor3([0, 0, 0]);

   /**
    * @param color An RGB color array
    */
   public constructor(color: number[]) {

      if (color.length != 3) {
         throw new Error('Invalid color array length (expected 3 elements)');
      }
      if (color[0] < 0 || color[0] > 1) {
         throw new Error('Invalid color \'r\' value (expected [0-1])');
      }
      if (color[1] < 0 || color[1] > 1) {
         throw new Error('Invalid color \'g\' value (expected [0-1])');
      }
      if (color[2] < 0 || color[2] > 1) {
         throw new Error('Invalid color \'b\' value (expected [0-1])');
      }

      super(color);
   }

   /**
    * Creates an glColor object using values in a Color object.
    * 
    * @param color A generic Color object.
    */
   public static fromColor(color: Color): glColor3 {
      const r = clamp(color.r, 0, 1);
      const g = clamp(color.g, 0, 1);
      const b = clamp(color.b, 0, 1);
      return new glColor3([r, g, b]);
   }

   /**
    * Returns the lighter of two colors
    * 
    * @param c1 The first color.
    * @param c2 The second color.
    * @returns The lightest color.
    */
   public static lightest(c1: glColor3, c2: glColor3): glColor3 {
      // TODO: use luminosity instead?
      if (c1.r + c1.g + c1.b > c2.r + c2.g + c2.b) {
         return c1;
      }
      else {
         return c2;
      }
   }

   /**
    * Returns the darker of two colors
    * 
    * @param c1 The first color.
    * @param c2 The second color.
    * @returns The darkest color.
    */
   public static darkest(c1: glColor3, c2: glColor3): glColor3 {
      // TODO: use luminosity instead?
      if (c1.r + c1.g + c1.b < c2.r + c2.g + c2.b) {
         return c1;
      }
      else {
         return c2;
      }
   }

   /**
    * Converts this object to an html color object (0-255 based).
    * 
    * @returns An htmlColor object.
    */
   public toHtmlColor(): htmlColor {
      const r = Math.round(255 * this.r);
      const g = Math.round(255 * this.g);
      const b = Math.round(255 * this.b);
      return new htmlColor([r, g, b]);
   }
}


/**
 * Color class that requires RGBA values to be between 0 and 1
 */
export class glColor4 extends Color {

   /**
    * @param color An RGB color array
    */
   public constructor(color: number[]) {

      if (color.length != 4) {
         throw new Error('Invalid color array length (expected 4 elements)');
      }
      if (color[0] < 0 || color[0] > 1) {
         throw new Error('Invalid color \'r\' value (expected [0-1])');
      }
      if (color[1] < 0 || color[1] > 1) {
         throw new Error('Invalid color \'g\' value (expected [0-1])');
      }
      if (color[2] < 0 || color[2] > 1) {
         throw new Error('Invalid color \'b\' value (expected [0-1])');
      }
      if (color[3] < 0 || color[3] > 1) {
         throw new Error('Invalid color \'a\' value (expected [0-1])');
      }

      super(color);
   }
}