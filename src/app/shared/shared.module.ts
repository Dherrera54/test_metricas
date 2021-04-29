import { NgModule } from '@angular/core';
import { CardAlbumesComponent } from './components/card-albumes/card-albumes.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CardAlbumesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [

  ],
  exports: [
    CardAlbumesComponent,
    HeaderComponent
  ],
})
export class SharedModule { }
