
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TitleTableComponent} from './components/title-table/title-table.component';
import {SearchComponent} from './components/search/search.component';
import {CardsComponent} from './components/cards/cards.component';
import {NgModule} from '@angular/core';
import {ToastMessageComponent} from './components/toast-message/toast-message.component';
import {InputTextComponent} from './components/input-text/input-text.component';

@NgModule({
  declarations: [
    ToastMessageComponent,
    CardsComponent,
    HeaderComponent,
    TitleTableComponent,
    SearchComponent,
    InputTextComponent
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
    SearchComponent,
    ToastMessageComponent,
    InputTextComponent
  ],
})
export class SharedModule { }
