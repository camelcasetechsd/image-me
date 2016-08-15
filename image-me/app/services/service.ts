import {Injectable} from '@angular/core';  
import {Http, Headers} from '@angular/http';

@Injectable()
export class ImageService {  
    constructor(private http: Http) {
    }

    upload(title,file) {

        var args = [
        100,
        title,
        ]; 

        this.makeFileRequest("http://localhost:8000/images", args , file ).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            
            formData.append('userId',params[0]);
            formData.append('title',params[1]);
            formData.append('image',files[0])	
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.stringify(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }

}



