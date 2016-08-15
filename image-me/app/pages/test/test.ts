import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ImageService} from '../../services/service.ts'

@Component({
  templateUrl: 'build/pages/test/test.html',
  // providers to return instance injectable classe
  providers: [ImageService]     

})
export class TestPage {

  public image;
  public title;

  constructor(private navCtrl: NavController , private service: ImageService) {
  }

  upload(){
	// 	this.service.upload(this.title , this.image).subscribe(
    //        data => {
    //            // data returned
    //        },
    //        // on error
    //        err => console.error(err),
    //        // on success
    //        () => console.log('upload completed')
    //    );

	this.service.upload( this.title , this.image);
  }


}
