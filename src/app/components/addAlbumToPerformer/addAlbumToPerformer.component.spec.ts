/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddAlbumToPerformerComponent } from './addAlbumToPerformer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

describe('AddAlbumToPerformerComponent', () => {
  let component: AddAlbumToPerformerComponent;
  let fixture: ComponentFixture<AddAlbumToPerformerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAlbumToPerformerComponent ],
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
    fixture = TestBed.createComponent(AddAlbumToPerformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
