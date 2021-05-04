/* tslint:disable:no-unused-variable */
import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import faker from 'faker';
import { CollectorService } from 'src/app/services/collector.service';
import { Collector } from 'src/app/model/collector';
import {CollectorDetail} from 'src/app/model/collectorDetail'

import { CollectorDetailComponent } from './collector-detail.component';

describe('CollectorDetailComponent', () => {
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

  it('collector detal should return ..', () => {

    let mockCollectors: CollectorDetail[] = [];

    for (let i = 1; i < 11; i++) {
      let collector = new CollectorDetail(i, faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence());
      mockCollectors.push(collector);
    }

    service.getCollectors().subscribe((collectors) => {

    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(mockCollectors);
  });


  afterEach(() => {
    httpMock.verify();
  });
});
