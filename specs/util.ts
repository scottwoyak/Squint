export function sleep(delay: number): Promise<void> {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve();
      }, delay);
   });
}

