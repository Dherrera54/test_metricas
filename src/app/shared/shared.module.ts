import { NgModule } from '@angular/core';
import {CardAlbumesComponent} from './components/card-albumes/card-albumes.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    CardAlbumesComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [

  ],
  exports: [
    CardAlbumesComponent
  ],
})
export class SharedModule { }
