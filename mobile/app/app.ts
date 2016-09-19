import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login/login';
import { Facebook } from 'ionic-native';

import { App } from 'ionic-angular';
import { AuthService } from './services/auth';

@Component({
template: '<ion-nav [root]="rootPage"></ion-nav>',
providers : [AuthService]
})

export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform, private auth: AuthService) {
    
  	// check if token still valid or not
  	this.auth.hasLogged().then((status)=>{
  		if(status){
			this.rootPage = TabsPage;		  	
  		}else{
    		this.rootPage = LoginPage;
  		}
  	});
  	
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

    });
  }
}

ionicBootstrap(MyApp,[Facebook]);
