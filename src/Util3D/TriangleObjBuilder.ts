import { TriangleObj } from './TriangleObj';
import { Vec3 } from './Vec';

export class TriangleObjBuilder extends TriangleObj {
   constructor(name?: string) {
      super(name);
   }

   // TODO pass in args for construction
   public addArrow(): void {
      const NUM_STEPS = 30;
      const TOTAL_LENGTH = 0.4;
      const ARROW_RADIUS = 0.15;
      const ARROW_LENGTH = 1.5 * ARROW_RADIUS;
      const SHAFT_RADIUS = 0.5 * ARROW_RADIUS;
      const TIP = new Vec3([0, 0, 0]);
      const TIP_BASE = new Vec3([0, ARROW_LENGTH, 0]);

      // build the arrow head
      for (let i = 0; i < NUM_STEPS; i++) {
         const x1 = ARROW_RADIUS * Math.sin(i / (NUM_STEPS - 1) * 2 * Math.PI);
         const y1 = ARROW_LENGTH;
         const z1 = ARROW_RADIUS * Math.cos(i / (NUM_STEPS - 1) * 2 * Math.PI);
         const x2 = ARROW_RADIUS * Math.sin((i + 1) / (NUM_STEPS - 1) * 2 * Math.PI);
         const y2 = ARROW_LENGTH;
         const z2 = ARROW_RADIUS * Math.cos((i + 1) / (NUM_STEPS - 1) * 2 * Math.PI);

         const p1 = new Vec3([x1, y1, z1]);
         const p2 = new Vec3([x2, y2, z2]);
         this.pushTriangle(TIP, p2, p1);
         this.pushTriangle(TIP_BASE, p1, p2);
      }

      // build the arrow shaft
      const END = new Vec3([0, TOTAL_LENGTH, 0]);
      for (let i = 0; i < NUM_STEPS; i++) {
         const x1 = SHAFT_RADIUS * Math.sin(i / (NUM_STEPS - 1) * 2 * Math.PI);
         const z1 = SHAFT_RADIUS * Math.cos(i / (NUM_STEPS - 1) * 2 * Math.PI);
         const x2 = SHAFT_RADIUS * Math.sin((i + 1) / (NUM_STEPS - 1) * 2 * Math.PI);
         const z2 = SHAFT_RADIUS * Math.cos((i + 1) / (NUM_STEPS - 1) * 2 * Math.PI);

         const p1 = new Vec3([x1, ARROW_LENGTH, z1]);
         const p2 = new Vec3([x2, ARROW_LENGTH, z2]);
         const p3 = new Vec3([x1, TOTAL_LENGTH, z1]);
         const p4 = new Vec3([x2, TOTAL_LENGTH, z2]);
         this.pushTriangle(p1, p2, p4);
         this.pushTriangle(p1, p4, p3);
         this.pushTriangle(END, p3, p4);
      }
   }

   public addSphere(numSteps: number, radius: number, center: Vec3): void {

      // create an array of vertices
      const vertices: Vec3[] = [];
      for (let i = 0; i < numSteps; i++) {
         if (i === 0) {
            vertices.push(new Vec3([center.x, center.y + radius, center.z]));
         }
         else if (i === numSteps - 1) {
            vertices.push(new Vec3([center.x, center.y - radius, center.z]));
         }
         else {
            const y = radius * Math.cos(i / (numSteps - 1) * Math.PI);
            const r = radius * Math.sin(i / (numSteps - 1) * Math.PI);
            const offset = i % 2 ? 0 : ((2 * Math.PI) / numSteps) * 0.5;

            for (let j = 0; j < numSteps; j++) {

               vertices.push(new Vec3([
                  center.x + r * Math.sin((j / numSteps) * 2 * Math.PI - offset),
                  center.y + y,
                  center.z + r * Math.cos((j / numSteps) * 2 * Math.PI - offset),
               ]));
            }
         }
      }

      // connect the vertices
      const first = 0;
      const last = vertices.length - 1;
      for (let i = 0; i < numSteps - 1; i++) {
         for (let j = 0; j < numSteps; j++) {
            if (i === 0) {
               const i1 = first;
               const i2 = j + 1;
               const i3 = j === (numSteps - 1) ? 1 : i2 + 1;
               this.pushTriangle(vertices[i1], vertices[i2], vertices[i3]);
            }
            else if (i === numSteps - 2) {
               const startIndex = last - numSteps;
               const i1 = last;
               const i2 = startIndex + j;
               const i3 = j === (numSteps - 1) ? startIndex : i2 + 1;
               this.pushTriangle(vertices[i1], vertices[i3], vertices[i2]);
            }
            else {
               const startA = 1 + (i - 1) * numSteps;
               const startB = 1 + i * numSteps;
               const i1 = startA + j;
               const i2 = (j === (numSteps - 1)) ? startA : i1 + 1;
               const i3 = startB + j;
               const i4 = (j === (numSteps - 1)) ? startB : i3 + 1;
               if (i % 2) {
                  this.pushTriangle(vertices[i1], vertices[i4], vertices[i2]);
                  this.pushTriangle(vertices[i1], vertices[i3], vertices[i4]);
               }
               else {
                  this.pushTriangle(vertices[i1], vertices[i3], vertices[i2]);
                  this.pushTriangle(vertices[i2], vertices[i3], vertices[i4]);
               }
            }
         }
      }
   }

   addCube(size: number, center: Vec3): void {

      const v1 = new Vec3([center.x - size / 2, center.y - size / 2, center.z - size / 2]);
      const v2 = new Vec3([center.x - size / 2, center.y - size / 2, center.z + size / 2]);
      const v3 = new Vec3([center.x - size / 2, center.y + size / 2, center.z - size / 2]);
      const v4 = new Vec3([center.x - size / 2, center.y + size / 2, center.z + size / 2]);
      const v5 = new Vec3([center.x + size / 2, center.y - size / 2, center.z - size / 2]);
      const v6 = new Vec3([center.x + size / 2, center.y - size / 2, center.z + size / 2]);
      const v7 = new Vec3([center.x + size / 2, center.y + size / 2, center.z - size / 2]);
      const v8 = new Vec3([center.x + size / 2, center.y + size / 2, center.z + size / 2]);

      this.pushQuad(v1, v2, v3, v4);
      this.pushQuad(v5, v7, v6, v8);

      this.pushQuad(v1, v5, v2, v6);
      this.pushQuad(v3, v4, v7, v8);

      this.pushQuad(v1, v3, v5, v7);
      this.pushQuad(v2, v6, v4, v8);
   }

   addDisk(numSteps: number, radius: number, center: Vec3): void {

      for (let i = 0; i <= numSteps; i++) {
         const x1 = center.x + radius * Math.sin((i / numSteps) * 2 * Math.PI);
         const y1 = center.y;
         const z1 = center.z + radius * Math.cos((i / numSteps) * 2 * Math.PI);
         const x2 = center.x + radius * Math.sin(((i + 1) / numSteps) * 2 * Math.PI);
         const y2 = center.y;
         const z2 = center.z + radius * Math.cos(((i + 1) / numSteps) * 2 * Math.PI);

         const p1 = new Vec3([x1, y1, z1]);
         const p2 = new Vec3([x2, y2, z2]);
         this.pushTriangle(center, p1, p2);
      }
   }
}