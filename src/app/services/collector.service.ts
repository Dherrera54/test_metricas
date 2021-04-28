import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Collector} from '../model/collector';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {

  private apiUrl:string = environment.baseUrl + 'collectors';

  constructor(private http: HttpClient) { }

  getCollectors(): Observable<Collector[]> {
    return this.http.get<Collector[]>(this.apiUrl);
  }

}
