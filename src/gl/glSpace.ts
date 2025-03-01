import { Vec3 } from '../Util3D/Vec';

/**
 * Utility for holding a clip space. Can be used to hold the viewing space
 * or clip space.
 */
export class glSpace {
   public min: Vec3;
   public max: Vec3;

   public get left(): number {
      return this.min.x;
   }
   public get right(): number {
      return this.max.x;
   }

   public get top(): number {
      return this.max.y;
   }
   public get bottom(): number {
      return this.min.y;
   }

   public get near(): number {
      return this.min.z;
   }
   public get far(): number {
      return this.max.z;
   }

   public get width(): number {
      return Math.abs(this.max.x - this.min.x);
   }

   public get height(): number {
      return Math.abs(this.max.y - this.min.y);
   }

   public get depth(): number {
      return Math.abs(this.max.z - this.min.z);
   }

   public constructor(min: Vec3, max: Vec3) {
      this.min = min;
      this.max = max;
   }
}