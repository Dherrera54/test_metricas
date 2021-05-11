/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import faker from 'faker';
import { BandDetailComponent } from './band-detail.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {RouterTestingModule} from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
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
    fixture = TestBed.createComponent(BandDetailComponent);
    component = fixture.componentInstance;
    component.bandDetail = band[0];
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should have an element band name', () => {

    fixture.detectChanges();
    expect(debug.query(By.css('#band-name')).nativeElement.innerText).toContain(
      component.bandDetail.name
    );
  });
  it('Should have an element band description', () => {

    expect(debug.query(By.css('#band-description')).nativeElement.innerText).toContain(
      component.bandDetail.description
    );

  });
  it('Should have an element album name', () => {
    expect(debug.query(By.css('#album-name-0')).nativeElement.innerText).toContain(
      component.bandDetail.albums[0].name
    );

  });
  it('Should have an element album record label', () => {
    expect(debug.query(By.css('#album-record-label-0')).nativeElement.innerText).toContain(
      component.bandDetail.albums[0].recordLabel
    );

  });

});
