import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AlbumesComponent} from './albumes.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AlbumesService} from '../../services/albumes..service';
import {observable, Observable, of, Subject, throwError} from 'rxjs';
import {AlbumsMock} from '../../shared/mocks/albums.mock';

describe('AlbumesComponent', () => {
  let component: AlbumesComponent;
  let fixture: ComponentFixture<AlbumesComponent>;
  const albums = AlbumsMock.response.data;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumesComponent],
      imports:  [
        HttpClientModule,
      ],
      providers: [
        HttpClient,
        {
          provide: AlbumesService,
          useValue: {
            getAlbumes(): Observable<any> {
              return  of(albums);
            },
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
    console.log(albums);
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
});

describe('Get error in services', () => {
  let component: AlbumesComponent;
  let fixture: ComponentFixture<AlbumesComponent>;
  const error = new Subject();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumesComponent],
      imports:  [
        HttpClientModule,
      ],
      providers: [
        HttpClient,
        {
          provide: AlbumesService,
          useValue: {
            getAlbumes(): any {
              return  error;
            },
          },
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumesComponent);
    error.error('');
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('Checking error in service', () => {
    expect(component.albums.length).toEqual(0);
  });
});
