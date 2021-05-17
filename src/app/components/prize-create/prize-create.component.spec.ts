/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {RouterTestingModule} from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { PrizeCreateComponent } from './prize-create.component';
import { FormBuilder } from '@angular/forms';
import { ToastrService, ToastrModule } from 'ngx-toastr';

describe('PrizeCreateComponent', () => {
  let component: PrizeCreateComponent;
  let fixture: ComponentFixture<PrizeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizeCreateComponent ],
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
    fixture = TestBed.createComponent(PrizeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
