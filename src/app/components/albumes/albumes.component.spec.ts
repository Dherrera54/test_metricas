import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AlbumesComponent} from './albumes.component';

describe('AlbumesComponent', () => {
  let component: AlbumesComponent;
  let fixture: ComponentFixture<AlbumesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumesComponent],
      providers: [
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('check the albumes when is not empty', () => {
    expect(component.albums.length).toEqual(0);
  });

  it('check the services when the albums is not empty', () => {
    expect(component.albums.length).toEqual(0);
  });


});
