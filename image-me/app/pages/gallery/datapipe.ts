import {Component ,Pipe ,PipeTransform } from '@angular/core';

@Pipe({name: 'keyValues'})
export class DataPipe  implements PipeTransform {

  transform(value) : any{
  	if(typeof value.userId != "unknown"){
  		 console.log(value)
   		 let keys = [];
 	   		for (let key in value) {
      		//keys.push({ key: key, value: value[key] });
    		}
    	return value;
	  	}
	  return value;
  	}


}