/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { PerformerComponent } from './performer.component';


describe('PerformerComponent', () => {
 let component: PerformerComponent;
 let fixture: ComponentFixture<PerformerComponent>;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [PerformerComponent]
   })
     .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(PerformerComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });
});
