/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { PrizesService } from './prizes.service';
import faker from 'faker';
import {Band} from '../model/performer';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('Service: Prizes', () => {
  let injector: TestBed;
  let service: PrizesService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PrizesService]
    });
    injector = getTestBed();
    service = injector.get(PrizesService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify({ignoreCancelled: true});
  });

  it('should inject service', inject([PrizesService], (service: PrizesService) => {
    expect(service).toBeTruthy();
  }));
});
