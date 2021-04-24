/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MusicianService } from './musician.service';

describe('Service: Musician', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicianService]
    });
  });

  it('should ...', inject([MusicianService], (service: MusicianService) => {
    expect(service).toBeTruthy();
  }));
});
