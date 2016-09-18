import {Component} from '@angular/core';
import {AuthService} from '../../services/auth';

import {HomePage} from '../home/home';
import {UploadPage} from '../upload/upload';
import {GalleryPage} from '../gallery/gallery';
import {LoginPage} from '../login/login'





@Component({
  templateUrl: 'build/pages/tabs/tabs.html',
  providers: [AuthService]
})
export class TabsPage {

  public tab1Root: any;
  public tab4Root: any;
  public tab5Root: any;

  constructor(private auth: AuthService) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab4Root = UploadPage;
    this.tab5Root = GalleryPage;
  }

}
