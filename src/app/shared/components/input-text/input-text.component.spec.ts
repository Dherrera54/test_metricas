import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {InputTextComponent} from './input-text.component';
import {ToastMessageComponent} from '../toast-message/toast-message.component';
import {Toast} from '../../models/toast';
import {InputText} from '../../models/inputText';
import {By} from '@angular/platform-browser';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputTextComponent, ToastMessageComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    component.element = new InputText('Nombre  del album', 'text', 'name',
      'Digite el usuario', '#FFFFFF', 'none', '10px', '50px',
      new Toast('', '', '', '#711B23', false), 50, 5
      , '', /[^a-zA-Z ]/g);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should check the paste', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#name');
    spyOn(component.text, 'emit');
    component.onPaste('prueba', nameInput);
    expect(component.text.emit).toHaveBeenCalledWith('prueba');
  });

  it('should check the keyup', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#name');
    spyOn(component.text, 'emit');
    component.element = new InputText('Nombre  del album', 'text', 'name',
      'Digite el usuario', '#FFFFFF', 'none', '10px', '50px',
      new Toast('', '', '', '#711B23', false), 50, 5
      , '', /[^0-9-]/g);
    fixture.detectChanges();
    component.keyup('prueba', nameInput);
    expect(component.text.emit).toHaveBeenCalledWith('');
  });
});
