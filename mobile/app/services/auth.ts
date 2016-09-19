import { Facebook } from 'ionic-native';
import {Injectable} from '@angular/core';  
import { Storage, SqlStorage } from 'ionic-angular';

import { App } from 'ionic-angular';
import {LoginPage} from '../pages/login/login'

@Injectable()
export class AuthService {

	myview: any;
	storage: any;
	userName: any;
	userId: any;


	constructor(private fb: Facebook, private app: App){
		this.storage = new Storage(SqlStorage);
		this.getUserName();
		this.getUserId();
	}

	login(){
	}

	logout(){
		// remove session data 
		this.storage.remove('token');
		this.storage.remove('expirationDate');			
		this.storage.remove('name');			
		this.storage.remove('userId');
		alert('You will be missed !');

		// to force login page without tabs-bar 
		this.app.getRootNav().setRoot(LoginPage);

	}

	// to check if user is authenticated or not
	hasLogged(){
		
		return this.storage.get('expirationDate').then((ed)=>{

			// is not empty
			if(typeof(ed) != undefined){
				if( new Date(ed * 1000) > new Date()){
					//console.log('logged, valid token');
					return true;
				}
			}
			//console.log('not logged yet or invalid token');
			return false;
		});
	}



//////////// helpers ///////////////////////////

	getUserName(){
		this.storage.get('name').then((name)=>{
			this.userName =  name;
		});
	}

	getUserId(){
		this.storage.get('userId').then((userId)=>{
			this.userId =  userId;
		});
	}




}
