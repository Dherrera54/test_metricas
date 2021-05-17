import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { SharedModule } from './shared/shared.module';
import { CollectorListarComponent } from './components/collector-listar/collector-listar.component';
import { CommonModule } from '@angular/common';
import { PerformerListComponent } from './components/performer-list/performer-list.component';
import { DetailAlbumComponent } from './components/detail-album/detail-album.component';
import { MusicianDetailComponent } from './components/musician-detail/musician-detail.component';
import { CollectorDetailComponent } from './components/collector-detail/collector-detail.component';
import { CommentComponent } from './components/comment/comment.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { BandDetailComponent } from './components/band-detail/band-detail.component';
import {HttpErrosModule} from './http-erros/http-erros.module';
import {CommunicatorService} from './services/communicator.service';
import {ErrorInterceptorService} from './http-erros/interceptors/error.interceptor.service';
import { MusicianCreateComponent } from './components/musician-create/musician-create.component';
import { PrizeCreateComponent } from './components/prize-create/prize-create.component';
import { ToastrModule }  from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    AlbumesComponent,
    PerformerListComponent,
    CollectorListarComponent,
    DetailAlbumComponent,
    MusicianDetailComponent,
    BandDetailComponent,
    CollectorDetailComponent,
    CommentComponent,
    MusicianCreateComponent,
    PrizeCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    HttpErrosModule,
    ToastrModule.forRoot({
      timeOut:3000,
      progressBar: true,
      progressAnimation: 'increasing'})

  ],
  exports:[
    MusicianCreateComponent
  ],
  providers: [
    CommunicatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
