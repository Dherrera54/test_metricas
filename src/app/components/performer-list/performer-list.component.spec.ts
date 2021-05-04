/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Band, Musician } from '../../model/performer';
import {RouterTestingModule} from '@angular/router/testing';
import { Router } from '@angular/router';

import { PerformerListComponent } from './performer-list.component';
import { HttpClientModule } from '@angular/common/http';
import faker from 'faker';
import { MusicianDetailComponent } from '../musician-detail/musician-detail.component';

describe('PerformerListComponent', () => {
  let component: PerformerListComponent;
  let fixture: ComponentFixture<PerformerListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
              RouterTestingModule],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          }}
      ],
      declarations: [ PerformerListComponent, MusicianDetailComponent ]

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformerListComponent);
    component = fixture.componentInstance;
    component.bands = [
      new Band(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.lorem.sentence(),
        [],
        faker.date.past()
        ),
      ];
    component.musicians = [
        new Musician(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.image.imageUrl(),
          faker.lorem.sentence(),
          [],
          faker.date.past()
          ),
        ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('Should have an  element band name', () => {
    expect(debug.query(By.css('#band-name')).nativeElement.innerText).toContain(
      component.bands[0].name
    );
  });
  it('Should have an element musician name', () => {
    expect(debug.query(By.css('#musician-name')).nativeElement.innerText).toContain(
      component.musicians[0].name
    );
  });
});
