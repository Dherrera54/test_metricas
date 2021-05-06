import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpErrorsRoutingModule} from './http-errors.routing.module';
const pages =  [

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
