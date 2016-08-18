import { Component } from '@angular/core';
import {ImageService} from '../../services/service'

@Component({
  templateUrl: '/app/pages/upload/upload.html',
  // providers to return instance injectable classe
  providers: [ImageService]  
})
export class UploadComponent { 

  public image : Array<File>
  public title;

   constructor(private service: ImageService) {
   	this.image = [];
   }

   upload(){
    var response = this.service.upload(this.title , this.image);

    if( typeof response == "undefined"){

    }else {
      console.log('Error')
    }
   }

   fileChangeEvent(fileInput: any){
        this.image = <Array<File>> fileInput.target.files;
   }

}
