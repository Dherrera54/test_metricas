import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Collector} from '../model/collector';
import { environment } from '../../environments/environment';
import { CollectorDetail } from '../model/collectorDetail';
import { AlbumToPerformer } from '../model/addAlbumToPerf';
import { CommentDetail } from '../model/commentDetail';
import {AlbumsOfCollector} from '../model/albumsOfCollector';
import {FavoriteMusician} from '../model/favoriteMusician';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {

  listCollectors: Array<CollectorDetail>;

  private apiUrl: string = environment.baseUrl + 'collectors';

  constructor(private http: HttpClient) { }

  getCollectors(): Observable<Array<CollectorDetail>> {
    const headers = {'content-type': 'application/json'};
    return this.http.get<Array<CollectorDetail>>(this.apiUrl);
  }

  getCollectorsDatos(): Array<CollectorDetail> {
    return this.listCollectors;
  }

  setCollectors(collectors: Array<CollectorDetail>): void {
    this.listCollectors = collectors;
  }

  addAlbumToCollector(newAlbum: AlbumToPerformer, albumId:number, collectorId:number):Observable<AlbumToPerformer>{
    return this.http.post<AlbumToPerformer>(`${this.apiUrl}/${collectorId}/albums/${albumId}`,newAlbum)
  }

  getCollectorDetail(collectorId):Observable<CollectorDetail>{
    return this.http.get<CollectorDetail>(`${this.apiUrl}/${collectorId}`)
  }

  getAlbumsOfCollector(collectorId):Observable<Array<AlbumsOfCollector>>{
    return this.http.get<Array<AlbumsOfCollector>>(`${this.apiUrl}/${collectorId}/albums`)
  }

  addFavoriteMusician(collectorID:number, musicianId:number):Observable<FavoriteMusician>{
    return this.http.post<FavoriteMusician>(`${this.apiUrl}/${collectorID}/musicians/${musicianId}`, null)
  }

  addFavoriteBand(collectorID:number, bandId:number):Observable<FavoriteMusician>{
    return this.http.post<FavoriteMusician>(`${this.apiUrl}/${collectorID}/bands/${bandId}`, null)
  }

}
