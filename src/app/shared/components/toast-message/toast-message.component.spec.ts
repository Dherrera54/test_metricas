import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastMessageComponent } from './toast-message.component';
import {Toast} from '../../models/toast';

describe('ToastMessageComponent', () => {
  let component: ToastMessageComponent;
  let fixture: ComponentFixture<ToastMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastMessageComponent);
    component = fixture.componentInstance;
    component.toast = new Toast('', '', '', '', false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check the input', () => {
    expect(component.toast.title).toEqual('');
  });
});
