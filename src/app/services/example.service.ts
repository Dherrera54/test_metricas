import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private http: HttpClient) {}

  getServicesExample(): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    return this.http.get('https://grupo-uniandes-03.herokuapp.com/albums', {headers});
  }
}
