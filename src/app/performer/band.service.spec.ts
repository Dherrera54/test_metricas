/* tslint:disable:no-unused-variable */

import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule} from "@angular/common/http/testing";

import faker from "faker";

import { BandService } from './band.service';

import { Band } from "./performer";


describe('Service: Band', () => {
 let injector: TestBed;
 let service: BandService;
 let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BandService]
    });
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("getCBands() should return 10 records", () => {
    let mockPosts: Band[] = [];

    for (let i = 0; i < 10; i++) {
      let course = new Band(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.random.date()
      );
      mockPosts.push(course);
    }

    service.getBands().subscribe((bands) => {
      expect(bands.length).toBe(10);
    });

    const req = httpMock.expectOne('https://grupo-uniandes-03.herokuapp.com/bands');
    expect(req.request.method).toBe("GET");
    req.flush(mockPosts);
  });
 });
