/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Band, Musician } from '../../model/performer';

import { PerformerListComponent } from './performer-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import faker from 'faker';

describe('PerformerListComponent', () => {
  let component: PerformerListComponent;
  let fixture: ComponentFixture<PerformerListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformerListComponent ],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformerListComponent);
    component = fixture.componentInstance;
    component.bands = [
      new Band(
        faker.random.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.lorem.sentence(),
        [],
        faker.date.past()
        ),
      ];
    component.musicians = [
        new Musician(
          faker.random.number(),
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

  it('Should have an header element band name', () => {
    expect(debug.query(By.css('span')).nativeElement.innerText).toContain(
      component.bands[0].name
    );
  });
});
