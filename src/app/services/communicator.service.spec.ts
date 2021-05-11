/* tslint:disable:no-unused-variables */

import {fakeAsync, TestBed, tick, } from '@angular/core/testing';
import {AlbumsMock} from '../shared/mocks/albums.mock';
import {HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {CommunicatorService} from './communicator.service';
import {Observable, of, Subject, throwError} from 'rxjs';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Card} from '../shared/models/card';
import {environment} from '../../environments/environment';
import {ManagerErrorService} from '../http-erros/services/manager-error.service';
import {Albumes} from '../model/albumes';
import {Router} from '@angular/router';

describe('CommunicatorService', () => {
  let service: CommunicatorService;
  const albums = AlbumsMock.response.data;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [
        CommunicatorService,
        ManagerErrorService,
        HttpClient,
        {
          provide: HttpClient
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
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
    service = TestBed.get(CommunicatorService);
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

  it('check the success services with setErrorStatus', () => {
    service = TestBed.get(CommunicatorService);
    const router = TestBed.get(Router);
    service.setErrorStatus({ status: 0 });
    expect(router.navigate).toHaveBeenCalledWith(['error404']);
  });


  it('check the success services with different setErrorStatus', () => {
    service = TestBed.get(CommunicatorService);
    const router = TestBed.get(Router);
    service.setErrorStatus({ status: 404 });
    expect(router.navigate).toHaveBeenCalledWith(['error404']);
  });
});

describe('CommunicatorService 404', () => {
  let service: CommunicatorService;
  const albums = AlbumsMock.response.data;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [
        CommunicatorService,
        ManagerErrorService,
        HttpClient,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicatorService);
  });

  it('post response 404', () => {
    service = TestBed.get(CommunicatorService);
    const spyService = TestBed.get(HttpClient);
    spyOn(spyService, 'post').and.returnValue(throwError({status: 0}));
    service.http_post({} as any, {} as any).subscribe((res: any) => console.log(res),
      err => {
        expect(err).toBeTruthy();
    });
  });
});



describe('CommunicatorService 404 with get', () => {
  let service: CommunicatorService;
  const albums = AlbumsMock.response.data;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [
        CommunicatorService,
        ManagerErrorService,
        HttpClient,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicatorService);
  });

  it('post response 404', () => {
    service = TestBed.get(CommunicatorService);
    const spyService = TestBed.get(HttpClient);
    spyOn(spyService, 'get').and.returnValue(throwError({status: 0}));
    service.http_get({} as any, {} as any).subscribe((res: any) => console.log(res),
      err => {
        expect(err).toBeTruthy();
      });
  });
});


