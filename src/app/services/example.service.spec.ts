import { TestBed, inject } from '@angular/core/testing';

import { ExampleService } from './example.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Service: Post', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExampleService]
    });
  });

  it('should create service', inject([ExampleService], (service: ExampleService) => {
    expect(service).toBeTruthy();
  }));
 });
