import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AlbumesComponent} from './components/albumes/albumes.component';

const routes: any = [
  { path: '', component: AlbumesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
