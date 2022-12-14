/* tslint:disable:no-unused-variables */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { CollectorService } from './collector.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { Collector } from '../model/collector';
import faker from 'faker';

describe('Service: Collector', () => {
  let injector: TestBed;
  let service: CollectorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CollectorService]
    });
    injector = getTestBed();
    service = injector.get(CollectorService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should create service', inject([CollectorService], (service: CollectorService) => {
    expect(service).toBeTruthy();
  }));

  it('getCollectors() should return 10 records', () => {

    let mockCollectors: Collector[] = [];

    for (let i = 1; i < 11; i++) {
      let collector = new Collector(i, faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence());
      mockCollectors.push(collector);
    }

    service.getCollectors().subscribe((collectors) => {
      expect(collectors.length).toBe(10);
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(mockCollectors);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
