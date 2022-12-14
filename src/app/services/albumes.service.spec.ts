import {TestBed} from '@angular/core/testing';
import {AlbumesService} from './albumes.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {AlbumsMock} from '../shared/mocks/albums.mock';
import {Observable, of, Subject} from 'rxjs';
import {Card} from '../shared/models/card';
import {CommunicatorService} from './communicator.service';
import {Albumes} from '../model/albumes';

describe('AlbumsService', () => {
  let service: AlbumesService;
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
            }
          },
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
    service = TestBed.inject(AlbumesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check the success services', () => {
    service = TestBed.get(AlbumesService);
    const spyService = TestBed.get(HttpClient);
    spyOn(spyService, 'get').and.returnValue(of(albums));
    service.getAlbumesServices().subscribe((resp: Array<Card>) => {
      expect(resp.length).toEqual(4);
    });
  });

  it('check the services when is having error', () => {
    service = TestBed.get(AlbumesService);
    const spyService = TestBed.get(HttpClient);
    const observable = new Subject();
    const error = {
      statusCode: 404,
      error: 'Not Found',
      message: 'Cannot GET /albumsa'
    };
    observable.error(error);
    spyOn(spyService, 'get').and.returnValue(observable);
    service.getAlbumesServices().subscribe((resp: any) => {

    }, (resp: any) => {
      expect(resp.message).toEqual('Cannot GET /albumsa');
    });
  });

  it('check set and get ', () => {
    service.setAlbumes(albums);
    expect(service.getAlbumes()[0].genre).toEqual('Salsa');
  });
});
