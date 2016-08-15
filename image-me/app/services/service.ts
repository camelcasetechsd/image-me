import {Injectable} from '@angular/core';  
import {Http, Headers} from '@angular/http';

@Injectable()
export class ImageService {  
    constructor(private http: Http) {
    }

    upload(title,file) {
        console.log(title)
        console.log(file)
    }
}