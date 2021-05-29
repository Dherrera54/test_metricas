/* tslint:disable:no-unused-variable */
import { TestBed, async, inject, getTestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import faker from 'faker';
import { CollectorService } from 'src/app/services/collector.service';
import {CollectorDetail} from 'src/app/model/collectorDetail'
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import {CollectorsMock} from '../../shared/mocks/collectors';
import { AlbumesService } from 'src/app/services/albumes..service';
import { Albumes } from 'src/app/model/albumes';
import { AlbumsMock } from 'src/app/shared/mocks/albums.mock';
import { AlbumsOfCollectorMock } from 'src/app/shared/mocks/albumsOfCollector';
import {CollectorDetailComponent} from './collector-detail.component'
import { AlbumsOfCollector } from 'src/app/model/albumsOfCollector';
import { InputTextComponent } from 'src/app/shared/components/input-text/input-text.component';
import { ToastMessageComponent } from 'src/app/shared/components/toast-message/toast-message.component';
import { AddAlbumComponent } from '../add-album/add-album.component';
import { AlbumesComponent } from '../albumes/albumes.component';
import { CardsComponent } from 'src/app/shared/components/cards/cards.component';
import { DetailAlbumComponent } from '../detail-album/detail-album.component';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Observable, of } from 'rxjs';
import { HeaderService } from 'src/app/shared/services/header.service';
import { Header } from 'src/app/shared/models/header';

describe('CollectorDetailComponent', () => {
  let component: CollectorDetailComponent;
  let fixture: ComponentFixture<CollectorDetailComponent>;
  let httpMock: HttpTestingController;
  const collectors: Array<CollectorDetail> = CollectorsMock.response.data;
  const albums = AlbumsMock.response.data;
  const albumsOfCollector = new Array<AlbumsOfCollector>();
  albumsOfCollector.push(new AlbumsOfCollector(100, 100, 'vendido'));
  const headers: Array<Header> = new Array();
  headers.push(new Header(0, 'A', true));
  headers.push(new Header(1, 'B', false));
  headers.push(new Header(2, 'C', false));
  headers.push(new Header(3, 'D', false));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CollectorDetailComponent,
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
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          }
        },
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
          provide: CollectorService,
          useValue: {
            getCollectorsDatos(): Array<CollectorDetail> {
              return  collectors;
            },
            getAlbumsOfCollector(): Observable<Array<AlbumsOfCollector>> {
              return  of(albumsOfCollector);
            },
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {params: {id: 100}}
          }
        },
        {
          provide: AlbumesService,
          useValue: {
            getAlbumes(): Array<Albumes> {
              return  albums;
            },
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
    fixture = TestBed.createComponent(CollectorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check the email in data', () => {
    expect('manollo@caracol.com.co').toEqual(collectors[0].email);
  });

  it('check the navigation', () => {
    spyOn(window.history, 'back');
    component.goBack();
    expect(window.history.back).toHaveBeenCalled();
  });

  it('check the getDetailCollector', () => {
    component.getDetailCollector();
    expect(component.collectorDetail.telephone).toEqual(collectors[0].telephone);
  });

  it('check the getCommentsAlbums', () => {
    component.getCommentsAlbum(collectors[0]);
    expect(component.albumesOfComments[0].comments).toEqual(collectors[0].comments);
  });

  it('check the getCollectorAlbums', () => {
    component.getCollectorAlbums();
    expect(component.albumsCollector[0].id).toEqual(collectors[0].collectorAlbums[0].id);
  });
});
