import { Facebook } from 'ionic-native';
import {Injectable} from '@angular/core';  
import { Storage, SqlStorage } from 'ionic-angular';



@Injectable()
export class AuthService {

	myview: any;
	storage: any;
	userName: any;
	userId: any;


	constructor(private fb: Facebook){
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

	// in case of not authenticated user
	preAuth(){

	}

	// in case of authenticated user
	afterAuth(){

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
