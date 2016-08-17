import {Component , OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {NavController} from 'ionic-angular';
import {global} from '../../global';
import {ImageService} from '../../services/service.ts'
import {HomePage} from '../home/home'

@Component({
  templateUrl: 'build/pages/image/image.html',
  // providers to return instance injectable classe
  providers: [ImageService]     

})
export class ImagePage {

  public data
  public loading

   constructor( public http: Http ) {
   }

   ngOnInit(){

        this.loading = true;
        this.http.request('http://localhost:8000/images/'+global.getImageId())
          .subscribe((res: Response) => {
            this.data = res.json();
            console.log(this.data)
            this.loading = false;
          });
  }
}
