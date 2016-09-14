import {Injectable} from '@angular/core';  
import {global} from '../global';

@Injectable()
export class Helpers {  

    public images ;

    constructor() {
    }

    public getJulian(date){
        return Math.floor(( date / 86400000) - ( date.getTimezoneOffset()/1440) + 2440587.5);
    }

    public prepareTokenValues(token){
        // setting token and time to expire time
        global.setFacebookAccessToken(token);

        


    }

    public isValidToken(): boolean{

    return true;
    }
}



