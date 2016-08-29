import { Component } from '@angular/core';
import {ImageService} from '../../services/service'
import { Router } from '@angular/router';
import { Image }    from './image';

@Component({
  templateUrl: '/app/pages/upload/upload.html',
  // providers to return instance injectable classe
  providers: [ImageService]  
})
export class UploadComponent { 

  model = new Image('');
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  public active = true;
      
   constructor(private router: Router, private service: ImageService) {
   }

   upload(){
    var response = this.service.upload(this.model.title , this.model.image);

    if( typeof response == "undefined"){
        // reset form elements
        this.model.title = '';
        // refresh form
        this.active = false;
        setTimeout(() => this.active = true, 0);
        // redirect to gallery
        this.router.navigate(['/list']);
    }else {
      console.log('Error')
    }
   }

   fileChangeEvent(fileInput: any){
        this.model.image = <File> fileInput.target.files;
   }

   // TODO: Remove this when we're done
   get diagnostic() { return JSON.stringify(this.model); }

}
