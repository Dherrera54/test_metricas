import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {Header} from '../../models/header';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit index event clickItem', () => {
    spyOn(component.index, 'emit');
    component.clickItem(1);
    expect(component.index.emit).toHaveBeenCalledWith(1);
  });

  it('Checking the view in header', () => {
    const headers: Array<Header> = new Array();
    headers.push(new Header(0, 'Home', true));
    headers.push(new Header(1, 'Coleccionistas', false));
    headers.push(new Header(2, 'Artistas', false));
    headers.push(new Header(3, 'Buscador', false));
    component.header = headers;
    fixture.detectChanges();
    const compile =  fixture.debugElement.nativeElement;
    const html = compile.getElementsByClassName('container-option-enabled')[0].innerHTML;
    console.log(html);
    expect(html.includes(component.header[0].title)).toEqual(true);
  });
});
