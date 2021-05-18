import { Injectable } from '@angular/core';
import {CommunicatorService} from './communicator.service';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateAlbumService {

  constructor(private communicatorService: CommunicatorService) { }

  createAlbum(body: any): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set('Access-Control-Allow-Origin', '*');
    return this.communicatorService.http_post(environment.baseUrl + 'albums', body, {headers} );
  }
}
