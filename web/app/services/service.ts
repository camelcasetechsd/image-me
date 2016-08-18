import {Injectable} from '@angular/core';  
import {Http, Headers} from '@angular/http';
import {global} from '../global';

@Injectable()
export class ImageService {  

    public images ;

    constructor(private http: Http) {
    }

    upload(title,file) {

        var args = [
        100,
        title,
        ]; 

        this.makeFileRequest(global.host+"/images","POST" , args , file ).then((result) => {
        	return ;    
        }, (error) => {
            console.error(error);
            return 1;
        });

    }


    makeFileRequest(url: string , method: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            //console.log(params)
            //if(typeof params[0] != "number" ){
            //    console.log('here')
                formData.append('userId',params[0]);
            //}

            if(typeof params[1] != "undefined" && params[1] != ""){
                formData.append('title',params[1]);
            }

            if(files.length > 0){
                formData.append('image',files[0])   
            }            
    
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open(method, url, true);
            xhr.send(formData);
        });
    }

}



