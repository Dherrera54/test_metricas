import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Band } from './performer';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BandService {
  private apiUrl = environment.baseUrl + 'musician.json';

constructor(private http: HttpClient) { }

getBands(): Observable<Band[]> {
  const headers = { 'content-type': 'application/json'};
  return this.http.get<Band[]>('https://grupo-uniandes-03.herokuapp.com/bands',{headers});
}
}
