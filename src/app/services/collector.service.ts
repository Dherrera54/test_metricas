import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Collector} from '../model/collector';
import { environment } from '../../environments/environment';
import { CollectorDetail } from '../model/collectorDetail';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {

  private apiUrl: string = environment.baseUrl + 'collectors';

  constructor(private http: HttpClient) { }

  getCollectors(): Observable<Array<CollectorDetail>> {
    return this.http.get<Array<CollectorDetail>>(this.apiUrl);
  }

}
