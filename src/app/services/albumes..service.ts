import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {Albumes} from '../model/albumes';
import {CommunicatorService} from './communicator.service';


@Injectable({
  providedIn: 'root'
})
export class AlbumesService {

  listAlbumes: Array<Albumes>;

  constructor(private communicatorService: CommunicatorService) {
  }

  getAlbumesServices(): Observable<any> {
    const headers = {'content-type': 'application/json'};
    return this.communicatorService.http_get(environment.baseUrl + 'albums', {headers} );
  }

  getAlbumes(): Array<Albumes> {
    return this.listAlbumes;
  }

  setAlbumes(albumes: Array<Albumes>): void {
    this.listAlbumes = albumes;
  }
}
