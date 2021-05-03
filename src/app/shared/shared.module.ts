import { NgModule } from '@angular/core';
import { CardAlbumesComponent } from './components/card-albumes/card-albumes.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TitleTableComponent} from './components/title-table/title-table.component';
import {SearchComponent} from './components/search/search.component';

@NgModule({
  declarations: [
    CardAlbumesComponent,
    HeaderComponent,
    TitleTableComponent,
    SearchComponent
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
    HeaderComponent,
    TitleTableComponent,
    SearchComponent
  ],
})
export class SharedModule { }
