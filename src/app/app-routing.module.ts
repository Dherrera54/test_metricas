import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { PerformerListComponent } from './components/performer-list/performer-list.component';
import {CollectorListarComponent} from './components/collector-listar/collector-listar.component';


const routes: any = [
  { path: '', component: AlbumesComponent },
  { path: 'albumes', component: AlbumesComponent },
  { path: 'performer', component: PerformerListComponent },
  { path: 'collector', component: CollectorListarComponent },
  { path: 'detail-album', component: PerformerListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
