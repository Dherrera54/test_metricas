import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Band } from '../model/performer';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BandService {
  private apiUrl = environment.baseUrl + 'bands';

constructor(private http: HttpClient) { }

getBands(): Observable<Band[]> {

  return this.http.get<Band[]>(this.apiUrl);
}
}
