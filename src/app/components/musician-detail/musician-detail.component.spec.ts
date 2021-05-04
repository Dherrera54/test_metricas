/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MusicianDetailComponent } from './musician-detail.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {RouterTestingModule} from '@angular/router/testing';
import { Router } from '@angular/router';
import { BandService } from '../../services/band.service';
import { Band, Musician } from '../../model/performer';
import {Observable, of} from 'rxjs';
import {MusicianMock} from '../../shared/mocks/musician.mock';
import { MusicianService } from '../../services/musician.service';



describe('MusicianDetailComponent', () => {
  let component: MusicianDetailComponent;
  let fixture: ComponentFixture<MusicianDetailComponent>;
  let debug: DebugElement;
  const musician: Array<Musician> = MusicianMock.response.data;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianDetailComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          }},
          {
            provide: MusicianService,
            useValue: {
              getMusician(): Observable<Musician[]> {
                return  of(musician);
              },
              setAlbumes(): void {},
            },
          },

      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianDetailComponent);
    component = fixture.componentInstance;
    component.musicianDetail = musician[0];
    fixture.detectChanges();

    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
