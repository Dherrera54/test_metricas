import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AlbumesComponent} from './components/albumes/albumes.component';

<<<<<<< HEAD
const routes: any = [];
=======
const routes: any = [
  { path: '', component: AlbumesComponent },
];
>>>>>>> develop

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
