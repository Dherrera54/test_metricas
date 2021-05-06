import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpErrorsRoutingModule} from './http-errors.routing.module';
import {InternetComponent} from './components/internet/internet.component';
const pages =  [
  InternetComponent
];

@NgModule({
  declarations: [
    ...pages
  ],
  imports: [
    CommonModule,
    HttpErrorsRoutingModule
  ],
  exports: [
    ...pages
  ]
})
export class HttpErrosModule { }
