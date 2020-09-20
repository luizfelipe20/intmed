import { NotfoundComponent } from './errors/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
  { 
    path: 'photos', 
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    } 
  },
  { 
    path: '**', 
    component: NotfoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
