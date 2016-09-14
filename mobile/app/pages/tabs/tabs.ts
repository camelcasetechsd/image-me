import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {UploadPage} from '../upload/upload';
import {GalleryPage} from '../gallery/gallery';
import {LoginPage} from '../login/login'

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab4Root: any;
  public tab5Root: any;
  public tab6Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab4Root = UploadPage;
    this.tab5Root = GalleryPage;
    this.tab6Root = LoginPage;
  }
}
