import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { SharedModule } from './shared/shared.module';
import { CollectorListarComponent } from './components/collector-listar/collector-listar.component';
import { CommonModule } from '@angular/common';
import { PerformerListComponent } from './components/performer-list/performer-list.component';
import { DetailAlbumComponent } from './components/detail-album/detail-album.component';
import { MusicianDetailComponent } from './components/musician-detail/musician-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumesComponent,
    PerformerListComponent,
    CollectorListarComponent,
    DetailAlbumComponent,
    MusicianDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
