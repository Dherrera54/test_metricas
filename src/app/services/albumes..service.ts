import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {Albumes} from '../model/albumes';


@Injectable({
  providedIn: 'root'
})
export class AlbumesService {

  listAlbumes: Array<Albumes>;

  constructor(private http: HttpClient) {}

  getAlbumesServices(): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    return this.http.get(environment.baseUrl + 'albums', {headers});
  }

  getAlbumes(): Array<Albumes> {
     return this.listAlbumes;
  }

  setAlbumes(albumes: Array<Albumes>): void  {
    this.listAlbumes = albumes;
  }
}
