export class Version {
   public static Major = 0;
   public static Minor = 0;
   public static Build = '107c';

   public static toString(): string {
      return this.Major + '.' + this.Minor + '.' + this.Build;
   }
}