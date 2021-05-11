/* tslint:disable:no-unused-variables */

import { TestBed, } from '@angular/core/testing';
import {AlbumesService} from './albumes..service';
import {AlbumsMock} from '../shared/mocks/albums.mock';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {CommunicatorService} from './communicator.service';
import {Observable, of, Subject} from 'rxjs';
import {Albumes} from '../model/albumes';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Card} from '../shared/models/card';
import {environment} from '../../environments/environment';
import {ManagerErrorService} from '../http-erros/services/manager-error.service';

describe('CommunicatorService', () => {
  let service: CommunicatorService;
  const albums = AlbumsMock.response.data;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [
        {
          provide: CommunicatorService,
          useValue: {
            http_get(): Observable<Array<Albumes>> {
              return  of(albums);
            },
            http_post(): Observable<Array<Albumes>> {
              return  of(albums);
            }
          },
        },
        {
          provide: ManagerErrorService,
        },
        HttpClient,
        {
          provide: HttpClient
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check the success services', () => {
    service = TestBed.get(CommunicatorService);
    const spyService = TestBed.get(HttpClient);
    spyOn(spyService, 'post').and.returnValue(of(albums));
    service.http_post(environment.baseUrl, '{}').subscribe((resp: Array<Card>) => {
      expect(resp.length).toEqual(4);
    });
  });


  it('check the success services with get', () => {
    service = TestBed.get(CommunicatorService);
    const spyService = TestBed.get(HttpClient);
    spyOn(spyService, 'get').and.returnValue(of(albums));
    service.http_get(environment.baseUrl, '{}').subscribe((resp: Array<Card>) => {
      expect(resp.length).toEqual(4);
    });
  });

  it('check the services when is having error', () => {
    service = TestBed.get(CommunicatorService);
    const spyService = TestBed.get(HttpClient);
    const observable = new Subject();
    const error = {
      statusCode: 0,
      error: 'Not Found',
      message: 'Cannot GET /albumsa'
    };
    observable.error(error);
    spyOn(spyService, 'post').and.returnValue(observable);
    service.http_post('', '').subscribe((resp: any) => {

    }, (resp: any) => {
      expect(resp.message).toEqual('Cannot GET /albumsa');
    });
  });

  it('check the services when is having error with get', () => {
    service = TestBed.get(CommunicatorService);
    const spyService = TestBed.get(HttpClient);
    const observable = new Subject();
    const error = {
      statusCode: 404,
      error: 'Not Found',
      message: 'Cannot GET /albumsa'
    };
    observable.error(error);
    spyOn(spyService, 'get').and.returnValue(observable);
    service.http_get('', '').subscribe((resp: any) => {

    }, (resp: any) => {
      expect(resp.message).toEqual('Cannot GET /albumsa');
    });
  });

});
