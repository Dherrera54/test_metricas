import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTableComponent } from './title-table.component';
import {TitlesTables} from '../../models/titlesTables';

describe('TitleTableComponent', () => {
  let component: TitleTableComponent;
  let fixture: ComponentFixture<TitleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check the input-text', () => {
    const titlesTable = new Array<TitlesTables>();
    titlesTable.push(new TitlesTables('Contenido'));
    titlesTable.push(new TitlesTables('Calificacion'));
    component.titlesTable = titlesTable;
    fixture.detectChanges();
    expect(component.titlesTable[0].title).toEqual('Contenido');
  });
});
