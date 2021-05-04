/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BandDetailComponent } from './band-detail.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {RouterTestingModule} from '@angular/router/testing';
import { Router } from '@angular/router';
import { BandService } from '../../services/band.service';
import { Band, Musician } from '../../model/performer';
import {Observable, of} from 'rxjs';
import {BandMock} from '../../shared/mocks/bands.mock';


describe('BandDetailComponent', () => {
  let component: BandDetailComponent;
  let fixture: ComponentFixture<BandDetailComponent>;
  let debug: DebugElement;
  const band: Array<Band> = BandMock.response.data;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandDetailComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          }},
          {
            provide: BandService,
            useValue: {
              getMusician(): Observable<Band[]> {
                return  of(band);
              },
              setAlbumes(): void {},
            },
          },

      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandDetailComponent);
    component = fixture.componentInstance;
    component.bandDetail = band[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
