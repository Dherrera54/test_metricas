/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MusicianCreateComponent } from './musician-create.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {RouterTestingModule} from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { BandService } from '../../services/band.service';
import { Band, Musician } from '../../model/performer';
import {Observable, of} from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { ToastrService, ToastrModule } from 'ngx-toastr';


describe('MusicianCreateComponent', () => {
  let component: MusicianCreateComponent;
  let fixture: ComponentFixture<MusicianCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianCreateComponent ],
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
    fixture = TestBed.createComponent(MusicianCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
