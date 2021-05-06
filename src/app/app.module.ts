import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { SharedModule } from './shared/shared.module';
import { CollectorListarComponent } from './components/collector-listar/collector-listar.component';
import { CommonModule } from '@angular/common';
import { PerformerListComponent } from './components/performer-list/performer-list.component';
import { DetailAlbumComponent } from './components/detail-album/detail-album.component';
import { CommentComponent } from './components/comment/comment.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {HttpErrosModule} from './http-erros/http-erros.module';
import {CommunicatorService} from './services/communicator.service';
import {ErrorInterceptorService} from './http-erros/interceptors/error.interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumesComponent,
    PerformerListComponent,
    CollectorListarComponent,
    DetailAlbumComponent,
    CommentComponent,
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
    HttpErrosModule
  ],
  providers: [
    CommunicatorService,
    {
      provide: LOCALE_ID,
      useValue: 'es-CO',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
