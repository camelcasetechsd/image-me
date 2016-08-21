import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../services/service'

@Component({
  templateUrl: '/app/pages/list/list.html',
  // providers to return instance injectable classe
  providers: [ImageService] 
})
export class ListComponent implements OnInit { 
  public data ;
  public loading: boolean;
  
  constructor(private service: ImageService) {
  }
  
  ngOnInit() { 
    this.loading = true;
    this.service.fetch().subscribe((data) => {this.loading = false;this.data = data});
  }

}
