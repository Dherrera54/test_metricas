import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ActivatedRoute, Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AlbumesService} from '../../services/albumes..service';
import {AlbumsMock} from '../../shared/mocks/albums.mock';
import {Albumes} from '../../model/albumes';
import {CommentComponent} from './comment.component';
import {TitleTableComponent} from '../../shared/components/title-table/title-table.component';
import {InputTextComponent} from '../../shared/components/input-text/input-text.component';
import {ToastMessageComponent} from '../../shared/components/toast-message/toast-message.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateAlbumService} from '../../services/create-album.service';
import {Observable, of, Subject} from 'rxjs';
import {AddCommentService} from '../../services/add-comment.service';
import {Header} from '../../shared/models/header';
import {CommunicatorService} from '../../services/communicator.service';
import {HeaderService} from '../../shared/services/header.service';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  const albums = AlbumsMock.response.data;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputTextComponent,
        ToastMessageComponent,
        CommentComponent,
        TitleTableComponent
      ],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        CommunicatorService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
        {
          provide: AddCommentService,
          useValue: {
            addComment(): Observable<any> {
              return  of(albums);
            }
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

  it('check the addComment when the review is null', () => {
    component.addComment();
    expect(component.warning.visible).toEqual(true);
  });


  it('check the addComment when the review is not null but is is minor 3 letters', () => {
    component.form.get('review').setValue('aaa');
    component.addComment();
    expect(component.warning.visible).toEqual(true);
  });

  it('check the addComment when the comment is null', () => {
    component.form.get('review').setValue('aaaaaaaaa');
    component.addComment();
    expect(component.warning.visible).toEqual(true);
  });

  it('check the addComment when the comment is not null but is is minor 1 letters', () => {
    component.form.get('review').setValue('aaaaaaaaa');
    component.form.get('comment').setValue('');
    fixture.detectChanges();
    component.addComment();
    expect(component.warning.visible).toEqual(true);
  });

  it('check the addComment when the comment is not null but is is major or equals 1 letters', () => {
    component.form.get('review').setValue('aaaaaaaaa');
    component.form.get('comment').setValue('1');
    fixture.detectChanges();
    component.addComment();
    expect(component.warning.visible).toEqual(true);
  });

  it('check the onChangeReview', () => {
    component.onChangeReview('1');
    expect(component.form.get('review').value).toEqual('1');
  });

});

describe('CommentComponent with error', () => {
  const observable = new Subject();
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  const albums = AlbumsMock.response.data;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputTextComponent,
        ToastMessageComponent,
        CommentComponent,
        TitleTableComponent
      ],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        CommunicatorService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
        {
          provide: AddCommentService,
          useValue: {
            addComment(): Observable<any> {
              return  observable;
            }
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

  it('check the addComment when the comment is not null but is is major or equals 1 letters', () => {
    component.form.get('review').setValue('aaaaaaaaa');
    component.form.get('comment').setValue('1');
    const error = {
      statusCode: 404,
      error: 'Not Found',
      message: 'Cannot GET /albumsa'
    };
    observable.error(error);
    component.addComment();
    expect(component.warning.title).toEqual('Error');
    expect(component.warning.image).toEqual('error.svg');
  });
});

