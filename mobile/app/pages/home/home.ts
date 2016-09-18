import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthService} from '../../services/auth';
import { Storage, SqlStorage } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [AuthService]     

})
export class HomePage {
  

  storage: any;
  hasLogged: boolean = false;

	  constructor(private navCtrl: NavController, private auth:	AuthService) {
			this.storage = new Storage(SqlStorage);		  
	  }

	  onPageWillEnter(){
	    this.auth.hasLogged().then((boolean)=>{
	    	this.hasLogged = boolean;
	    });
	  }
}
