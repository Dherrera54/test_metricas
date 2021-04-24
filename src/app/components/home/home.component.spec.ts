import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
 let component: HomeComponent;
 let fixture: ComponentFixture<HomeComponent>;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [HomeComponent]
   })
     .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(HomeComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });
});
