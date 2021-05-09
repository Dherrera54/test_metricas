/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import faker from 'faker';
import { CollectorService } from 'src/app/services/collector.service';
import { Collector } from 'src/app/model/collector';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('Service: Collector', () => {
  let injector: TestBed;
  let service: CollectorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      providers: [CollectorService, {
        provide: Router,
        useValue: {
          navigate: jasmine.createSpy('navigate'),
        }}]
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

  it('Should have a collector name', () => {
    let mockCollectors: Collector[] = [];
    for (let i = 1; i < 11; i++) {
      let collector = new Collector(i, faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence());
      mockCollectors.push(collector);
    }

    service.getCollectors().subscribe((collectors) => {
      expect(collectors[0].name).toBe(mockCollectors[0].name);
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(mockCollectors);

  });

  afterEach(() => {
    httpMock.verify();
  });
});
