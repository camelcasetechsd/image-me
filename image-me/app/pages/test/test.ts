import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ImageService} from '../../services/service.ts'

@Component({
  templateUrl: 'build/pages/test/test.html',
  // providers to return instance injectable classe
  providers: [ImageService]     

})
export class TestPage {

  public image : Array<File>
  public title;

   constructor(private navCtrl: NavController , private service: ImageService) {
   	this.image = [];
   }

   upload(){
		this.service.upload( this.title , this.image);
	}

	fileChangeEvent(fileInput: any){
        this.image = <Array<File>> fileInput.target.files;
    }
 


}
