import {Component , OnInit ,Pipe ,PipeTransform } from '@angular/core';
import {Http, Response} from '@angular/http';
import {NavController, LoadingController} from 'ionic-angular';
import {ImageService} from '../../services/service';
import {AuthService} from '../../services/auth';
import {global} from '../../global';
import {DataPipe} from './datapipe';
import {ImagePage} from '../image/image'

@Component({
  
  templateUrl: 'build/pages/gallery/gallery.html',

  // providers to return instance injectable classe
  providers: [ImageService ,AuthService],

  pipes: [DataPipe],

})

export class GalleryPage {

  public data ;
  loading: boolean;
  userName: string;


  constructor(private navCtrl: NavController , private service: ImageService , private http: Http , private loadingCtrl: LoadingController ,private auth: AuthService) {
    this.userName = global.userName;
  }

  ionViewLoaded() { // THERE IT IS!!!
      this.presentLoading();
  }


  clicked(event){
    global.imageId = event.srcElement.getAttribute('id');
    this.navCtrl.push(ImagePage);
 
  }

  doRefresh(refresher) {


      setTimeout(() => {
        this.presentLoading();
        console.log('Async operation has ended');
        refresher.complete();

      }, 2000);
  }

  presentLoading() {

    this.loading = true;
    this.http.request(global.host+'/images?userId='+global.userId)
      .subscribe((res)=>{
            this.data = res.json();
            this.loading = false;
    });

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });

    loader.present();
  }




}

