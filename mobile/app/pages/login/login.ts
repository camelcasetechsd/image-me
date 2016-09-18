import {Component} from '@angular/core';
import {AuthService} from '../../services/auth';
//import { Facebook } from 'ionic-native';
import { NavController, Platform } from 'ionic-angular';
import { CordovaOauth, Facebook } from "ng2-cordova-oauth/core";
import {global} from '../../global';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Helpers} from '../../services/helpers';


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



    public constructor(public navCtrl: NavController, private platform: Platform, private http: Http, private helpers: Helpers) {
        this.oauth = new CordovaOauth();
        this.provider = new Facebook({
            clientId: global.getFacebookAppId(),
            appScope: ["public_profile"]
        });
    }
 
    public login() {
        this.platform.ready().then(() => {
            this.oauth.logInVia(this.provider).then((tokenJson: any) => {
                
                // getting Access Token
                this.helpers.prepareTokenValues(tokenJson);

                // getting user data
                this.http.get("https://graph.facebook.com/v2.0/me?fields=id,name&format=json&access_token="+global.getFacebookAccessToken())
                .map(res => res.json())
                .subscribe((res)=>{
                    global.setUserId(res.id);
                    global.setUserName(res.name);

                    this.facebookToken = global.facebookToken
                    this.tokenCreationDate = global.tokenCreationDate
                    this.tokenExpirationDate = global.tokenExpirationDate
                    this.userId =  global.userId
                    this.userName = global.userName
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
