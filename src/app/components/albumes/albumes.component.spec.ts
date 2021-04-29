import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AlbumesComponent} from './albumes.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AlbumesService} from '../../services/albumes..service';
import {observable, Observable, of, Subject, throwError} from 'rxjs';
import {AlbumsMock} from '../../shared/mocks/albums.mock';
import {CardAlbumesComponent} from '../../shared/components/card-albumes/card-albumes.component';
import {RouterTestingModule} from '@angular/router/testing';
import { Router } from '@angular/router';
import {DetailAlbumComponent} from '../detail-album/detail-album.component';
import {HeaderComponent} from '../../shared/components/header/header.component';
import {BrowserModule} from '@angular/platform-browser';
import {Albumes} from '../../model/albumes';

describe('AlbumesComponent', () => {
  let component: AlbumesComponent;
  let fixture: ComponentFixture<AlbumesComponent>;
  const albums = AlbumsMock.response.data;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AlbumesComponent,
        CardAlbumesComponent,
        DetailAlbumComponent,
        HeaderComponent
      ],
      imports:  [
        RouterTestingModule,
        HttpClientModule,
        BrowserModule
      ],
      providers: [
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
});
