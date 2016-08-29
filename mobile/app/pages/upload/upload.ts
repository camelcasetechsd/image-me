import {Component} from '@angular/core';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators, AbstractControl  } from '@angular/forms';
import {NavController , Tabs } from 'ionic-angular';
import {ImageService} from '../../services/service.ts';
import {FileValidator} from '../../services/fileValidator.ts';
import {GalleryPage} from '../gallery/gallery';

@Component({
  templateUrl: 'build/pages/upload/upload.html',
  // providers to return instance injectable classe
  providers: [ImageService,FileValidator]     

})
export class UploadPage {

imageForm: FormGroup;  
title: AbstractControl;
fileValidationError: Array<boolean>;
image: Array<File>;
isValid: boolean;

    constructor(private formBuilder: FormBuilder ,private fv: FileValidator ,private navCtrl: NavController , private service: ImageService , private tab: Tabs) {

        this.fileValidationError = [false , false];
        
        this.imageForm = formBuilder.group({  
          'title': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        });

        this.title = this.imageForm.controls['title'];     
    }

    titleChanged(title: string){
        if(!this.imageForm.valid){
          this.isValid = false;
        }
    }

    fileChangeEvent(fileInput: any){
        this.isValid = false;
        this.image = <Array<File>> fileInput.target.files;
        this.fileValidationError = this.fv.validateImageFile(this.image);   
        if(this.imageForm.valid && !this.fileValidationError[0] && !this.fileValidationError[1]){
            this.isValid = true;
        } 
    }


    onSubmit(value: string): void { 
        console.log(this.isValid);
    }       



}
