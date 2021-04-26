import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardAlbumesComponent } from './card-albumes.component';
import {AlbumesInformation} from '../../models/albumesInformation';
import {CardsAlbumMock} from '../../mocks/card-album.mock';

describe('CardAlbumesComponent', () => {
  let component: CardAlbumesComponent;
  let fixture: ComponentFixture<CardAlbumesComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAlbumesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAlbumesComponent);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check the view when is the data is empty', () => {
    component.albumes = new Array<AlbumesInformation>();
    component = fixture.componentInstance;
    expect(component.albumes.length).toEqual(0);
  });

  it('check the view when is the data is not empty', () => {
    component.albumes = CardsAlbumMock.response.data;
    component = fixture.componentInstance;
    expect(component.albumes.length).toEqual(1);
  });

  it('check the view when it has data', () => {
    component.albumes = CardsAlbumMock.response.data;
    fixture.detectChanges();
    const compile =  fixture.debugElement.nativeElement;
    const html = compile.getElementsByClassName('album-title')[0].innerHTML;
    expect(html.includes(component.albumes[0].titleAlbum)).toEqual(true);
  });
});
