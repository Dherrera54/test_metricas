import { NgModule } from '@angular/core';
import { CardAlbumesComponent } from './components/card-albumes/card-albumes.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    CardAlbumesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [

  ],
  exports: [
    CardAlbumesComponent,
    HeaderComponent
  ],
})
export class SharedModule { }
