import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AlbumesService {

  constructor(private http: HttpClient) {}

  getAlbumes(): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    return this.http.get(environment.baseUrl + 'albums', {headers});
  }
}
