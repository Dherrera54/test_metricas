import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AlbumesComponent} from './albumes.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AlbumesService} from '../../services/albumes.service';
import {observable, Observable, of, Subject, throwError} from 'rxjs';
import {AlbumsMock} from '../../shared/mocks/albums.mock';
import {CardsComponent} from '../../shared/components/cards/cards.component';
import {RouterTestingModule} from '@angular/router/testing';
import { Router } from '@angular/router';
import {DetailAlbumComponent} from '../detail-album/detail-album.component';
import {HeaderComponent} from '../../shared/components/header/header.component';
import {BrowserModule} from '@angular/platform-browser';
import {Albumes} from '../../model/albumes';
import {SearchComponent} from '../../shared/components/search/search.component';
import {HeaderService} from '../../shared/services/header.service';
import {Header} from '../../shared/models/header';
import {CommunicatorService} from '../../services/communicator.service';
import {AddAlbumComponent} from '../add-album/add-album.component';
import {InputTextComponent} from '../../shared/components/input-text/input-text.component';
import {ToastMessageComponent} from '../../shared/components/toast-message/toast-message.component';

describe('AlbumesComponent', () => {
  let component: AlbumesComponent;
  let fixture: ComponentFixture<AlbumesComponent>;
  const albums = AlbumsMock.response.data;
  const headers: Array<Header> = new Array();
  headers.push(new Header(0, 'A', true));
  headers.push(new Header(1, 'B', false));
  headers.push(new Header(2, 'C', false));
  headers.push(new Header(3, 'D', false));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputTextComponent,
        ToastMessageComponent,
        AddAlbumComponent,
        AlbumesComponent,
        CardsComponent,
        DetailAlbumComponent,
        HeaderComponent,
        SearchComponent
      ],
      imports:  [
        RouterTestingModule,
        HttpClientModule,
        BrowserModule
      ],
      providers: [
        HttpClient,
        CommunicatorService,
        {
          provide: AlbumesService,
          useValue: {
            getAlbumesServices(): Observable<Array<Albumes>> {
              return  of(albums);
            },
            setAlbumes(): void {},
          },
        },
        {
          provide: HeaderService,
          useValue: {
            getHeadersOptions(): Array<Header> {
              return headers;
            },
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check the albumes is not empty', () => {
    expect(component.albums.length).toEqual(4);
  });

  it('check the first album is Salsa', () => {
    expect(component.albums[0].genderAlbum).toEqual('Salsa');
  });

  it('Checking the albums first name is Buscando América', () => {
    expect(component.albums[0].titleAlbum).toEqual('Buscando América');
  });

  it('should trigger click option addAlbum', () => {
    const router = TestBed.get(Router);
    component.addAlbum();
    expect(router.navigate).toHaveBeenCalledWith(['add-album']);
  });

  it('should trigger click option performer', () => {
    const router = TestBed.get(Router);
    component.showDetailAlbum(100);
    expect(router.navigate).toHaveBeenCalledWith(['detail-album', 100]);
  });

  it('should get headers when is not existe', () => {
    expect(component.getHeader()).toEqual(false);
  });

  it('should show all data when the text is empty', () => {
    component.searchText('');
    expect(component.albums.length).toEqual(4);
  });

  it('should show all data when the text is not empty', () => {
    component.searchText('Buscando');
    expect(component.albums.length).toEqual(1);
  });
});


describe('AlbumesComponent check the header exists', () => {
  let component: AlbumesComponent;
  let fixture: ComponentFixture<AlbumesComponent>;
  const albums = AlbumsMock.response.data;
  const headers: Array<Header> = new Array();
  headers.push(new Header(0, 'A', false));
  headers.push(new Header(1, 'B', false));
  headers.push(new Header(2, 'C', false));
  headers.push(new Header(3, 'Searcher', true));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AlbumesComponent,
        CardsComponent,
        DetailAlbumComponent,
        HeaderComponent,
        SearchComponent
      ],
      imports:  [
        RouterTestingModule,
        HttpClientModule,
        BrowserModule
      ],
      providers: [
        CommunicatorService,
        HttpClient,
        {
          provide: AlbumesService,
          useValue: {
            getAlbumesServices(): Observable<Array<Albumes>> {
              return  of(albums);
            },
            setAlbumes(): void {},
          },
        },
        {
          provide: HeaderService,
          useValue: {
            getHeadersOptions(): Array<Header> {
              return headers;
            },
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get headers when it exists', () => {
    expect(component.getHeader()).toEqual(true);
  });
});
