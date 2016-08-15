import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/common';

@Component({
  templateUrl: 'build/pages/upload/upload.html'
})
export class UploadPage {
  constructor(private navCtrl: NavController, private builder: FormBuilder) {
  	this.uploadForm = builder.group({
      title: ["", Validators.required],
      image: ["", Validators.required]
    });
  }
  uploadImage(event) {
    console.log(this.uploadForm.value);
    event.preventDefault();
  }
}
