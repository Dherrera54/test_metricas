import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsComponent } from './cards.component';
import {Card} from '../../models/card';
import {CardsAlbumMock} from '../../mocks/card-album.mock';

describe('CardAlbumesComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check the view when is the data is empty', () => {
    component.albumes = new Array<Card>();
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

  it('should emit index event clickItem', () => {
    spyOn(component.index, 'emit');
    component.clickItem(1);
    expect(component.index.emit).toHaveBeenCalledWith(1);
  });

});
