export class Version {
   public static Major = 0;
   public static Minor = 0;
   public static Build = '97';

   public static toString(): string {
      return this.Major + '.' + this.Minor + '.' + this.Build;
   }
}