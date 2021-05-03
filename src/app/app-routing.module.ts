import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { PerformerListComponent } from './components/performer-list/performer-list.component';
import {CollectorListarComponent} from './components/collector-listar/collector-listar.component';
import {DetailAlbumComponent} from './components/detail-album/detail-album.component';
import { MusicianDetailComponent } from './components/musician-detail/musician-detail.component';
import {CommentComponent} from './components/comment/comment.component';

const routes: any = [
  { path: '', component: AlbumesComponent },
  { path: 'albumes', component: AlbumesComponent },
  { path: 'performer', component: PerformerListComponent },
  { path: 'collector', component: CollectorListarComponent },
  { path: 'detail-album/:id', component: DetailAlbumComponent },
  { path: 'detail-musician', component: MusicianDetailComponent},
  { path: 'comment', component: CommentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
