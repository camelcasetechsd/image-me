import {Component} from '@angular/core';
import {NavController , Tabs } from 'ionic-angular';
import {ImageService} from '../../services/service.ts'
import {GalleryPage} from '../gallery/gallery'

@Component({
  templateUrl: 'build/pages/upload/upload.html',
  // providers to return instance injectable classe
  providers: [ImageService]     

})
export class UploadPage {

  public image : Array<File>
  public title;
  public activeTab;

   constructor(private navCtrl: NavController , private service: ImageService , private tab: Tabs) {
   	this.image = [];
   }

   upload(){
		var response = this.service.upload(this.title , this.image);

    if( typeof response == "undefined"){

      var tabs: Tabs = this.navCtrl.parent ;

      // selecting active tag to be Gallery tab (NOTE : active index starts from 0  respectively as in tabs.js )
      tabs.select(2);

      // redirect to Gallery Page 
      this.navCtrl.push(GalleryPage);

    }else {
      console.log('Error')
    }
	}

	fileChangeEvent(fileInput: any){
        this.image = <Array<File>> fileInput.target.files;
        
    }
}
