import {Component, ViewChild} from '@angular/core';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators, AbstractControl  } from '@angular/forms';
import {NavController, Tabs, Slides } from 'ionic-angular';
import {ImageService} from '../../services/service.ts';
import {FileValidator} from '../../services/fileValidator.ts';
import {GalleryPage} from '../gallery/gallery';

@Component({
  templateUrl: 'build/pages/upload/upload.html',
  // providers to return instance injectable classe
  providers: [ImageService,FileValidator]     

})
export class UploadPage {
    
    @ViewChild('imageUploadSlider') imageUploadSlider: Slides;
    swiper: any;    
    
    slideOneForm: FormGroup;
    slideTwoForm: FormGroup;

 
    title: AbstractControl;
    image: Array<File>;

    validationMessages: Array<string> = [];

    fileChanged: boolean = false;

    constructor(private formBuilder: FormBuilder,private fv: FileValidator ,private navCtrl: NavController , private service: ImageService , private tab: Tabs) {
 
        this.slideOneForm = formBuilder.group({
            title: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        });  

        this.title = this.slideOneForm.controls['title'];
    }
 
 /////////////////////////////////////////////////
 /////////   SLIDER  Methods  ///////////////////
    next(){
        
        // locking swiping
        if(this.swiper){
           this.swiper.unlockSwipes();
        }

        this.imageUploadSlider.slideNext();
    }
 
    prev(){
        
        // locking swiping
        if(this.swiper){
            this.swiper.unlockSwipes();
        }

        this.imageUploadSlider.slidePrev();
    }
 
    onIonDrag(event){
      this.swiper = event;
      this.swiper.lockSwipes();
    }

//////////////////////////////////////////////
////////// changing events  /////////////////

    fileChangeEvent(fileInput: any){
        this.fileChanged = true;
        this.image = <Array<File>> fileInput.target.files;
        this.validationMessages = this.fv.validateImageFile(this.image);         
        //console.log(this.validationMessages);
    }


///////////////////////////////////////////
///////// submit validation  /////////////

    validateForm(): boolean{
      if( this.validationMessages.length > 0){
        return false;
      }
      return true;
    }

////////////////////////////////////////////
/////////  Submition ///////////////////////
    onSubmit(){ 
      var response = this.service.upload(this.title.value , this.image);

      if( typeof response == "undefined"){

          var tabs: Tabs = this.navCtrl.parent ;

          // selecting active tag to be Gallery tab (NOTE : active index starts from 0  respectively as in tabs.js )
          tabs.select(2);

          // redirect to Gallery Page 
          this.navCtrl.push(GalleryPage);

      }else {
            console.log('Error')
      }
    }
}       


////////////////////////////////////////////