import {Component, Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'threePerRow'})
export class DataPipe  implements PipeTransform {

  transform(value) : any{
  	let container: any = [];
	   	for(let i = 0 ; i < Math.ceil(value.length/3) ; i++ ){
	   		let sub: any = [];
	   		for(let j = 0 ; j < 3 ; j++ ){
	   			if(typeof (value[(i*3)+j]) === "undefined"){
	   				break;
	   			}
   				sub[j] = value[(i*3)+j]	   			

	   		}	
	   		container.push(sub);
	   	}
	    return container;
	}
}