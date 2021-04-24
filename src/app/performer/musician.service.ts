import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Musician } from './performer';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MusicianService {
  private apiUrl = environment.baseUrl + 'musician.json';

constructor(private http: HttpClient) { }

getMusicians(): Observable<Musician[]> {
  const headers = { 'content-type': 'application/json'};
  return this.http.get<Musician[]>('https://grupo-uniandes-03.herokuapp.com/musicians',{headers});
 }
}
