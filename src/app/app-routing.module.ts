import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { PerformerListComponent } from './components/performer-list/performer-list.component';
import {CollectorListarComponent} from './components/collector-listar/collector-listar.component';
import {DetailAlbumComponent} from './components/detail-album/detail-album.component';
import { MusicianDetailComponent } from './components/musician-detail/musician-detail.component';
import { BandDetailComponent } from './components/band-detail/band-detail.component';
import { CollectorDetailComponent } from './components/collector-detail/collector-detail.component';
import {CommentComponent} from './components/comment/comment.component';
import {AppComponent} from './app.component';
import { MusicianCreateComponent } from './components/musician-create/musician-create.component';
import { PrizeCreateComponent } from './components/prize-create/prize-create.component';
import {AddAlbumComponent} from './components/add-album/add-album.component';

const routes: any = [
  { path: '', component: AppComponent },
  { path: 'albumes', component: AlbumesComponent },
  { path: 'add-album', component: AddAlbumComponent },
  { path: 'performer', component: PerformerListComponent },
  { path: 'collector', component: CollectorListarComponent },
  { path: 'detail-album/:id', component: DetailAlbumComponent },
  { path: 'detail-musician/:id', component: MusicianDetailComponent},
  { path: 'detail-band/:id', component: BandDetailComponent},
  { path: 'collector-detail/:id', component: CollectorDetailComponent},
  { path: 'create-musician/band/:id', component: MusicianCreateComponent },
  { path: 'create-prize/band/:id', component: PrizeCreateComponent },
  { path: 'comment', component: CommentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
