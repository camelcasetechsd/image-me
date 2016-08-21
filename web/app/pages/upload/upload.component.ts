import { Component } from '@angular/core';
import {ImageService} from '../../services/service'
import { Router } from '@angular/router';

@Component({
  templateUrl: '/app/pages/upload/upload.html',
  // providers to return instance injectable classe
  providers: [ImageService]  
})
export class UploadComponent { 

  public image : Array<File>
  public title;
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  public active = true;
      
   constructor(private router: Router, private service: ImageService) {
   	this.image = [];
   }

   upload(){
    var response = this.service.upload(this.title , this.image);

    if( typeof response == "undefined"){
        // reset form elements
        this.title = '';
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
        this.image = <Array<File>> fileInput.target.files;
   }

}
