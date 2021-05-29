import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Band, Musician} from '../model/performer';
import { Prize, PerformerPrizes } from '../model/prize';
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
 createPrize(prize:Prize):Observable<Prize>{
  return this.http.post<Prize>(this.apiUrl, prize);
 }
 addPriceToMusician(prize:PerformerPrizes, prizeID:number,bandID ):Observable<PerformerPrizes>{
  console.warn("el premio fue agregado a la banda", prize);
    return this.http.post<PerformerPrizes>(`${this.apiUrl}/${prizeID}/bands/${bandID}`,prize);
 }
}
