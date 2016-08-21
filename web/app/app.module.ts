import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing,
         appRoutingProviders } from './app.routing';
         
import { AppComponent }  from './pages/app/app.component';
import { UploadComponent }  from './pages/upload/upload.component';
import { ListComponent }  from './pages/list/list.component';
import { PageNotFoundComponent }  from './pages/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    UploadComponent,
    ListComponent,
    PageNotFoundComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }