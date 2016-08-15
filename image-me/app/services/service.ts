import {Injectable} from '@angular/core';  
import {Http, Headers} from '@angular/http';

@Injectable()
export class ImageService {  
    constructor(private http: Http) {
    }

    upload(title,file) {
        console.log(title)
        console.log(file)
        
        this.makeFileRequest("http://localhost:8000/images", [], file ).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            console.log(formData)
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }

}



