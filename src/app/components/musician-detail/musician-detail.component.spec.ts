/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MusicianDetailComponent } from './musician-detail.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {RouterTestingModule} from '@angular/router/testing';
import { Router,ActivatedRoute } from '@angular/router';
import { BandService } from '../../services/band.service';
import { Band, Musician } from '../../model/performer';
import {Observable, of} from 'rxjs';
import {MusicianMock} from '../../shared/mocks/musician.mock';
import { MusicianService } from '../../services/musician.service';
import faker from 'faker';



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
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {params: {id: 100}}
            }
          },

      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianDetailComponent);
    component = fixture.componentInstance;
    component.musicianDetail= musician[0]
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check the collection in data', () => {
    expect(component.musicianDetail.name).toEqual(musician[0].name);
  });


  it('Should have an element musician name', () => {
    fixture.detectChanges();
    expect(debug.query(By.css('#musician-name')).nativeElement.innerText).toContain(
      component.musicianDetail.name
    );
  });
  it('Should have an element musician description', () => {
    expect(debug.query(By.css('#musician-description')).nativeElement.innerText).toContain(
      component.musicianDetail.description
    );

  });
  it('Should have an element album name', () => {
    expect(debug.query(By.css('#album-name-0')).nativeElement.innerText).toContain(
      component.musicianDetail.albums[0].name
    );

  });
  it('Should have an element album record label', () => {
    expect(debug.query(By.css('#album-record-label-0')).nativeElement.innerText).toContain(
      component.musicianDetail.albums[0].recordLabel
    );

  });

});
