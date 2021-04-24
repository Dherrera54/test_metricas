import { TestBed, async, inject,getTestBed } from '@angular/core/testing';
import { BandService } from './band.service';
import faker from 'faker';
import {Band }from './performer';
import { environment } from "../../environments/environment";
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('Service: Band', () => {
  let injector: TestBed;
  let service: BandService;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + "bands";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [BandService]
   });
   injector = getTestBed();
   service = injector.get(BandService);
   httpMock = injector.get(HttpTestingController);
 });
 afterEach(() => {
  httpMock.verify({ ignoreCancelled: true });
});

 it('Method getBands() should return 10 records', () => {
  let mockPosts: Band[] = [];
  for (let i = 0; i < 10; i++) {
    let band = new Band(faker.lorem.sentence(),
                        faker.lorem.sentence(),
                        faker.lorem.sentence(),
                        faker.random.number());
    mockPosts.push(band);
  }

  service.getBands().subscribe((bands) => {
    expect(bands.length).toBe(10);
  });

  const req = httpMock.expectOne(apiUrl);
  expect(req.request.method).toBe('GET');
  req.flush(mockPosts);
});

});
