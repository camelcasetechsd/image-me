import {Injectable} from '@angular/core';  
import {global} from '../global';
import {Messages} from '../messages';

@Injectable()
export class FileValidator {  
    
    validExtensions: Array<string> = ['jpg', 'gif', 'jpeg'];
    validationMessages: Array<string> = [];

    constructor() {
    }

    validateImageFile(image): Array<string> {
        this.validationMessages = [];

        
        // validate image existance 
        let message = this.validateImageExistance(image);
        if(message != null){
            this.validationMessages.push(message);
        }

            
        // validating image extension if existed
        if(this.validationMessages.length < 1){
            message = this.validateImageExtension(image);
            if(message != null){
                this.validationMessages.push(message);
            }  
        }

        return this.validationMessages ;
    }

    validateImageExistance(image): any{
        if(image.length == 0){
            return Messages.FILE_REQUIRED()
        }
    }

    validateImageExtension(image): any{
        let targetImage = image[0]
        let counter = 0;
        for(let i = 0 ; i < this.validExtensions.length ; i++){
            if(targetImage.type != 'image/'+this.validExtensions[i]){
                counter++;
            }
        }

        // extension is not valid 
        if(this.validExtensions.length === counter){
            return Messages.WRONG_EXTENSION();
        }
        //file extension is valid
    }
}



