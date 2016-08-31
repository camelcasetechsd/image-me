import {Component , OnInit ,Pipe ,PipeTransform } from '@angular/core';
import {Http, Response} from '@angular/http';
import {NavController, LoadingController} from 'ionic-angular';
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


   constructor(private navCtrl: NavController , private service: ImageService , private http: Http , private loadingCtrl: LoadingController) {
  }

  ngOnInit(){
    this.presentLoading();

    this.loading = true;
      this.http.request(global.host+'/images?userId='+global.getUserId())
        .subscribe((res: Response) => {
          this.data = res.json();
          this.loading = false;
        });

    this.presentLoading();

  }

  clicked(event){
    global.setImageId(event.srcElement.getAttribute('id'));
    this.navCtrl.push(ImagePage);
 
  }

doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.ngOnInit();
    
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

presentLoading() {

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });

    loader.present();
  }




}

