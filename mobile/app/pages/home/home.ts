import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthService} from '../../services/auth';
import { Storage, SqlStorage } from 'ionic-angular';
import {global} from '../../global';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [AuthService]     

})
export class HomePage {
  
  storage: any;
  hasLogged: boolean = false;
  userName: string ='';

	  constructor(private navCtrl: NavController, private auth:	AuthService) {
			this.storage = new Storage(SqlStorage);		  
	  }

	  onPageWillEnter(){
	    	this.storage.get('name').then((name)=>{
				this.userName = name;
			});
	  }
}
