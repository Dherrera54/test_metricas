import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ActivatedRoute, Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AlbumesService} from '../../services/albumes..service';
import {AlbumsMock} from '../../shared/mocks/albums.mock';
import {Albumes} from '../../model/albumes';
import {CommentComponent} from './comment.component';
import {TitleTableComponent} from '../../shared/components/title-table/title-table.component';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  const albums = AlbumsMock.response.data;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentComponent, TitleTableComponent],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
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
          provide: ActivatedRoute,
          useValue: {
            snapshot: {queryParams: {id: 100}}
          }
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check the collection in data', () => {
    expect(component.album.recordLabel).toEqual(albums[0].recordLabel);
  });

  it('check the navigation', () => {
    spyOn(window.history, 'back');
    component.goBack();
    expect(window.history.back).toHaveBeenCalled();
  });

  it('check the getDetailAlbum', () => {
    component.getComments();
    expect(component.album.recordLabel).toEqual(albums[0].recordLabel);
  });
});
