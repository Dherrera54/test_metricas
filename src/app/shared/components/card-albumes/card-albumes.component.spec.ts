import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlbumesComponent } from './card-albumes.component';
import {AlbumsMock} from '../../mocks/albums.mock';

describe('CardAlbumesComponent', () => {
  let component: CardAlbumesComponent;
  let fixture: ComponentFixture<CardAlbumesComponent>;
  const albums = AlbumsMock.response.data;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAlbumesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAlbumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
