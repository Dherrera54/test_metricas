import { TestBed, async, inject,getTestBed } from '@angular/core/testing';
import { MusicianService } from './musician.service';
import faker from 'faker';
import { Musician }from './performer';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('Service: Musician', () => {
  let injector: TestBed;
  let service: MusicianService;
  let httpMock: HttpTestingController;


 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [MusicianService]
   });
   injector = getTestBed();
   service = injector.get(MusicianService);
   httpMock = injector.get(HttpTestingController);
 });
 afterEach(() => {
  httpMock.verify({ ignoreCancelled: true });
});

 it('Method getMusicians() should return 10 records', () => {
  let mockPosts: Musician[] = [];
  for (let i = 0; i < 10; i++) {
    let musician = new Musician(faker.lorem.sentence(),
                                faker.image.imageUrl(),
                                faker.lorem.sentence(),
                                faker.date.past());

    mockPosts.push(musician);
  }

  service.getMusicians().subscribe((musicians) => {
    expect(musicians.length).toBe(10);
  });

  const req = httpMock.expectOne(() => true);
  expect(req.request.method).toBe('GET');
  req.flush(mockPosts);
});

});
