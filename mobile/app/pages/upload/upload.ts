import {Component} from '@angular/core';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators, AbstractControl  } from '@angular/forms';
import {NavController , Tabs } from 'ionic-angular';
import {ImageService} from '../../services/service.ts';
import {GalleryPage} from '../gallery/gallery';

@Component({
  templateUrl: 'build/pages/upload/upload.html',
  // providers to return instance injectable classe
  providers: [ImageService]     

})
export class UploadPage {

imageForm: FormGroup;  
title: AbstractControl;



    constructor(private formBuilder: FormBuilder , private navCtrl: NavController , private service: ImageService , private tab: Tabs) {
      this.imageForm = formBuilder.group({  
        'title': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      });

      this.title = this.imageForm.controls['title'];     
    }

    onSubmit(value: string): void { 
        if(this.imageForm.valid) {
            console.log('Submitted value: ', value);
            console.log(this.title);
        }
    }       



}
