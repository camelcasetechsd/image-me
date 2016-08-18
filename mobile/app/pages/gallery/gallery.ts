import {Component , OnInit ,Pipe ,PipeTransform } from '@angular/core';
import {Http, Response} from '@angular/http';
import {NavController} from 'ionic-angular';
import {ImageService} from '../../services/service';
import {global} from '../../global';
import {DataPipe} from './datapipe';
import {ImagePage} from '../image/image'

@Component({
  
  templateUrl: 'build/pages/gallery/gallery.html',

  // providers to return instance injectable classe
  providers: [ImageService],

  pipes: [DataPipe],

})

export class GalleryPage {

  public data ;
  loading: boolean;


   constructor(private navCtrl: NavController , private service: ImageService , private http: Http) {
  }

  ngOnInit(){

        this.loading = true;
        this.http.request('http://localhost:8000/images?userId='+global.getUserId())
          .subscribe((res: Response) => {
            this.data = res.json();
            this.loading = false;
          });
  }

  loadGallery(userId){
      return this.service.getImages(userId);
  }  

  clicked(event){
    global.setImageId(event.srcElement.getAttribute('id'));
    this.navCtrl.push(ImagePage);
 
  }

}

