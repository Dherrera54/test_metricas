import { Injectable } from '@angular/core';
import {Header} from '../models/header';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private headers: Array<Header> = new Array();
  constructor() { }

  getHeadersOptions(): Array<Header> {
     return this.headers;
  }

  setHeaders(header: Array<Header>): void {
    this.headers = header;
  }
}
