/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MusicianService } from './musician.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Musician', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MusicianService]
    });
  });

  it('should create service', inject([MusicianService], (service: MusicianService) => {
    expect(service).toBeTruthy();
  }));
});
