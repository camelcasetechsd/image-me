import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ImageService} from '../../services/service.ts'
import {HomePage} from '../home/home'

@Component({
  templateUrl: 'build/pages/upload/upload.html',
  // providers to return instance injectable classe
  providers: [ImageService]     

})
export class UploadPage {

  public image : Array<File>
  public title;

   constructor(private navCtrl: NavController , private service: ImageService) {
   	this.image = [];
   }

   upload(){
		var response = this.service.upload(this.title , this.image);
    if( typeof response == "undefined"){
      // TODO: add flash mesage
      // reditecting to home page
      //this.navCtrl.push(HomePage);
    }else {
      // TODO : adding flash message
      console.log('Error')
    }
	}

	fileChangeEvent(fileInput: any){
        this.image = <Array<File>> fileInput.target.files;
    }
 


}
