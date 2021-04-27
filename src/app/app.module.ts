import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
<<<<<<< HEAD
import { PerformerModule } from './performer/performer.module';
=======
import { AlbumesComponent } from './components/albumes/albumes.component';
import { SharedModule } from './shared/shared.module';
>>>>>>> develop

@NgModule({
  declarations: [
    AppComponent,
    AlbumesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    PerformerModule
=======
    SharedModule
>>>>>>> develop
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
