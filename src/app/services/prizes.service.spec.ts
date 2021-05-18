/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { PrizesService } from './prizes.service';
import faker from 'faker';
import {Prize} from '../model/prize';

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

  it('Method getPrizes() should return 10 records', () => {
    let mockPosts: Prize[] = [];
    for (let i = 0; i < 10; i++) {
      let prize = new Prize(   faker.random.number(),
                                  faker.lorem.sentence(),
                                  faker.lorem.sentence(),
                                  faker.lorem.sentence(),
                                  []);

      mockPosts.push(prize);
    }

    service.getPrizes().subscribe((prizes) => {
      expect(prizes.length).toBe(10);
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });


});

