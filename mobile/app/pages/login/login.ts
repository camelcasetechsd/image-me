import {Component} from '@angular/core';
import {AuthService} from '../../services/auth';
import { NavController, Platform } from 'ionic-angular';
import { CordovaOauth, Facebook } from "ng2-cordova-oauth/core";
import {global} from '../../global';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Helpers} from '../../services/helpers';
import { Storage, SqlStorage } from 'ionic-angular';

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


    public constructor(public navCtrl: NavController, private platform: Platform, private http: Http, private helpers: Helpers) {
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
                
                // saving login token & expiration date
                this.storage.set('token',tokenJson.access_token);
                this.storage.set('expirationDate',new Date( 1000 * tokenJson.expires_in )) 

                // getting user data
                this.http.get("https://graph.facebook.com/v2.0/me?fields=id,name&format=json&access_token="+tokenJson.access_token)
                .map(res => res.json())
                .subscribe((res)=>{
                    // saving userId & user name
                    this.storage.set('name',res.name);
                    this.storage.set('userId',res.id);
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
