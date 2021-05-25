import { TestBed } from '@angular/core/testing';
import { CreateAlbumService } from './create-album.service';
import {AlbumsMock} from '../shared/mocks/albums.mock';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {CommunicatorService} from './communicator.service';
import {Observable, of, Subject} from 'rxjs';
import {Albumes} from '../model/albumes';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {AddCommentService} from './add-comment.service';

describe('AddCommentService', () => {
  let service: AddCommentService;
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
            http_post(): Observable<Albumes> {
              return  of(albums[0]);
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
    service = TestBed.inject(AddCommentService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('check the success services', () => {
    service = TestBed.get(AddCommentService);
    const spyService = TestBed.get(HttpClient);
    spyOn(spyService, 'post').and.returnValue(of(albums));
    service.addComment('', 1).subscribe((resp: Albumes) => {
      expect(resp.releaseDate).toEqual('1984-08-01T00:00:00.000Z');
    });
  });

  it('check the services when is having error', () => {
    service = TestBed.get(AddCommentService);
    const spyService = TestBed.get(HttpClient);
    const observable = new Subject();
    const error = {
      statusCode: 404,
      error: 'Not Found',
      message: 'Cannot GET /albumsa'
    };
    observable.error(error);
    spyOn(spyService, 'post').and.returnValue(observable);
    service.addComment('', 1).subscribe((resp: any) => {

    }, (resp: any) => {
      expect(resp.message).toEqual('Cannot GET /albumsa');
    });
  });
});
