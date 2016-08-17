import {Component ,Pipe ,PipeTransform } from '@angular/core';

@Pipe({name: 'keyValues'})
export class DataPipe  implements PipeTransform {

  transform(value) : any{
	   	let keys = [];
		for( var i=0;i<value.length;i++){
			var imageData = value[i].image; 
 		    var dataUriPrefix = "data:image/	png;base64,";
		    var img = document.createElement("IMG");
		    img.setAttribute('src', dataUriPrefix + imageData);
		    img.setAttribute('width', '200');
		 	value[i].image = img;
		}
	    return value;
	}
}