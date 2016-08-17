import {Component ,Pipe ,PipeTransform } from '@angular/core';

@Pipe({name: 'keyValues'})
export class DataPipe  implements PipeTransform {

  transform(value) : any{
  	
   	let keys = [];
	for (let key in value) {
		console.log(key.image)
	}

    return keys;
}