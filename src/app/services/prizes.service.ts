import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Band, Musician} from '../model/performer';
import {Prize}  from '../model/prize';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrizesService {
  private apiUrl = environment.baseUrl + 'prizes';

constructor(private http: HttpClient) { }
getPrizes(): Observable<Prize[]> {
   return this.http.get<Prize[]>(this.apiUrl);
 }
}
