
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TitleTableComponent} from './components/title-table/title-table.component';
import {SearchComponent} from './components/search/search.component';
import {CardsComponent} from './components/cards/cards.component';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    CardsComponent,
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
    CardsComponent,
    HeaderComponent,
    TitleTableComponent,
    SearchComponent
  ],
})
export class SharedModule { }
