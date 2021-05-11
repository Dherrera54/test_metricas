
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, tap, timeout} from 'rxjs/operators';
import {ErrorResponse} from '../http-erros/model/error-response';
import {ManagerErrorService} from '../http-erros/services/manager-error.service';

@Injectable()
export class CommunicatorService {

  constructor(
    private http: HttpClient,
    private managerErrorService: ManagerErrorService,
  ) {
  }

  http_post(url: string, body: any, options?: any): Observable<any> {
    return this.http.post(url, body, options).pipe(
      timeout(15000),
      tap(() => console.log('Fue invocado exitosamente ' + url) ),
      catchError(error => this.setErrorStatus(error)),
    );
  }

  http_get(url: string, options?: any): Observable<any> {
    return this.http.get(url, options).pipe(
      timeout(15000),
      tap(() => console.log('Fue invocado exitosamente ' + url)),
      catchError(error => this.setErrorStatus(error)),
    );
  }

  setErrorStatus(error: any): any {
    let newError: ErrorResponse;
    if (error.status === 0) {
      newError = new ErrorResponse({codigo: error.statusCode});
    }
    this.managerErrorService.setStatusCode(Number(error.status));
    return throwError(newError);
  }
}

export type WebRequestMethod =
  'GET' |
  'POST' |
  'PUT' |
  'DELETE' |
  'OPTIONS' |
  'HEAD' |
  'PATCH';

export interface IWebRequestOptions {
  method?: string;
  search?: string;
  params?: string | URLSearchParams;
  headers?: Headers | null;
  body?: any | {};
  withCredentials?: boolean | null;
  responseType?: XMLHttpRequestResponseType | null;
  op?: string;
}
