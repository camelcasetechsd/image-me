import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FORM_DIRECTIVES, Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  templateUrl: 'build/pages/upload/upload.html',
  directives: [FORM_DIRECTIVES],
})
export class UploadPage {
    uploadForm: FormGroup;
    title: FormControl;
    image: FormControl;
 
    constructor(private navController: NavController) {
      this.uploadForm = new FormGroup({ 
        title: new FormControl('', Validators.required),
        image: new FormControl('', Validators.required)
      });
  }
  uploadImage(event) {
    let titleValue = event.target[0].value;
    let imageFile = event.target[2].files[0];
    let path = 'http://localhost:8000/images';
    let method = 'POST';
    return new Promise((resolve, reject) => {
           var formData: any = new FormData();
           var xhr = new XMLHttpRequest();
           
           formData.append('userId',123);
           formData.append('title',titleValue);
           formData.append('image',imageFile)   
   
           xhr.onreadystatechange = function () {
               if (xhr.readyState == 4) {
                   if (xhr.status == 200) {
                       resolve(JSON.stringify(xhr.response));
                   } else {
                       reject(xhr.response);
                   }
               }
           }
           xhr.open(method, path, true);
           xhr.send(formData);
       })
  }

}
