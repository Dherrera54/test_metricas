import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {CommunicatorService} from './communicator.service';

@Injectable({
  providedIn: 'root'
})
export class AddCommentService {

  constructor(private communicatorService: CommunicatorService) { }

  addComment(body: any, id: number): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set('Access-Control-Allow-Origin', '*');
    return this.communicatorService.http_post(environment.baseUrl + 'albums/' + id + '/comments', body, {headers} );
  }
}
