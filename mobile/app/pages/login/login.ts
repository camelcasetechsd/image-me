import {Component} from '@angular/core';
import {AuthService} from '../../services/auth';
import { NavController, Platform } from 'ionic-angular';
import { CordovaOauth, Facebook } from "ng2-cordova-oauth/core";
import {global} from '../../global';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Helpers} from '../../services/helpers';
import { Storage, SqlStorage } from 'ionic-angular';

import {TabsPage} from '../tabs/tabs';
import { App } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [Helpers]

  })
export class LoginPage {

    public oauth: CordovaOauth;
    private provider: Facebook;

    public facebookToken 
    public tokenCreationDate 
    public tokenExpirationDate
    public userId
    public userName

    public storage


    public constructor(public navCtrl: NavController, private platform: Platform, private http: Http, private helpers: Helpers, private app: App) {
        this.oauth = new CordovaOauth();
        this.provider = new Facebook({
            clientId: global.getFacebookAppId(),
            appScope: ["public_profile"]
        });

        this.storage = new Storage(SqlStorage);

    }
 
    public login() {
        this.platform.ready().then(() => {
            this.oauth.logInVia(this.provider).then((tokenJson: any) => {
                
                let dummyDate = new Date();
                // saving login token & expiration date
                this.storage.set('token',tokenJson.access_token);
                this.storage.set('expirationDate', dummyDate.getTime() + tokenJson.expires_in * 1000 ) 

                // setting tabs-bar for navigation
                this.app.getRootNav().setRoot(TabsPage);

                // getting user data
                this.http.get("https://graph.facebook.com/v2.0/me?fields=id,name&format=json&access_token="+tokenJson.access_token)
                .map(res => res.json())
                .subscribe((res)=>{
                    // saving userId & user name
                    this.storage.set('name',res.name);
                    this.storage.set('userId',res.id);

                    this.storage.get('userId').then((id)=>{
                        this.userId = id;
                    });

                    console.log('user has logged in successfully');
                    

                }
                ,(error : any)=> {
                        alert("There was a problem getting your profile.  Check the logs for details.");
                        this.platform.exitApp();
                });
   

            }, (error) => {
                console.log(JSON.stringify(error));
            });
        });

    }   

}
