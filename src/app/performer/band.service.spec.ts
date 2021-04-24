import { TestBed, async, inject } from '@angular/core/testing';
import { BandService } from './band.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Service: Band', () => {
 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [BandService]
   });
 });

 it('should create service', inject([BandService], (service: BandService) => {
   expect(service).toBeTruthy();
 }));
});
