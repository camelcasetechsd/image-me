import { Routes, RouterModule } from '@angular/router';
import { UploadComponent }  from './pages/upload/upload.component';
import { ListComponent }  from './pages/list/list.component';
import { PageNotFoundComponent }  from './pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'list', component: ListComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
