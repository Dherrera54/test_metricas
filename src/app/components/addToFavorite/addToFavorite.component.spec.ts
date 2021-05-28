/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddToFavoriteComponent } from './addToFavorite.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

describe('AddToFavoriteComponent', () => {
  let component: AddToFavoriteComponent;
  let fixture: ComponentFixture<AddToFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToFavoriteComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
      providers: [

          {provide: FormBuilder},
          {provide: ToastrService},
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          }},
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
    fixture = TestBed.createComponent(AddToFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
