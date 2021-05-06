import { TestBed } from '@angular/core/testing';

import { ManagerErrorService } from './manager-error.service';
import {AlbumesService} from '../../services/albumes..service';
import {AlbumsMock} from '../../shared/mocks/albums.mock';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Router} from '@angular/router';
import {Routes} from '../const/routes';

describe('ManagerErrorService', () => {
  let service: ManagerErrorService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [
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
    service = TestBed.inject(ManagerErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should trigger click option internet', () => {
    const router = TestBed.get(Router);
    service.setStatusCode(-1);
    expect(router.navigate).toHaveBeenCalledWith([Routes.ERROR_INTERNET]);
  });

});
