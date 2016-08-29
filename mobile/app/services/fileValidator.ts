import {Injectable} from '@angular/core';  
import {global} from '../global';

@Injectable()
export class FileValidator {  

    fileExistanceValidator: boolean;
    fileExtensionValidator: boolean;
    validExtensions: Array<string> ;
    

    constructor() {
        
        this.validExtensions = ['jpg', 'gif', 'jpeg'];
        
        this.fileExistanceValidator = false;
        this.fileExtensionValidator = true;

    }

    validateImageFile(image): Array<boolean> {

        // validate image existance 
        this.fileExistanceValidator = this.validateImageExistance(image);


        // validating image extension
        if(!this.fileExistanceValidator){
            this.fileExtensionValidator = this.validateImageExtension(image);  
        }
        
        
        return [
        this.fileExistanceValidator,
        this.fileExtensionValidator,
        ];
    }

    validateImageExistance(image): boolean{
        if(image.length == 0){
            return true;
        }
        return false;

    }

    validateImageExtension(image): boolean{
        let targetImage = image[0]
        for(let i = 0 ; i < this.validExtensions.length ; i++){
            if(targetImage.type === 'image/'+this.validExtensions[i]){
                return false;
            }
        }
        return true;
    }

}



