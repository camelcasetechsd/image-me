import {Injectable} from '@angular/core';  

@Injectable()
export class Messages {  

   constructor() {
   }

   static FILE_REQUIRED(): string { return 'Image is required !'; }

   static WRONG_EXTENSION(): string { return 'Invalid extension should be .jpeg , .jpg or .gif !'; }

}



