import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlbumComponent } from './add-album.component';
import {AlbumesComponent} from '../albumes/albumes.component';
import {CardsComponent} from '../../shared/components/cards/cards.component';
import {DetailAlbumComponent} from '../detail-album/detail-album.component';
import {HeaderComponent} from '../../shared/components/header/header.component';
import {SearchComponent} from '../../shared/components/search/search.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {CommunicatorService} from '../../services/communicator.service';
import {AlbumesService} from '../../services/albumes.service';
import {Observable, of, Subject} from 'rxjs';
import {Albumes} from '../../model/albumes';
import {HeaderService} from '../../shared/services/header.service';
import {Header} from '../../shared/models/header';
import {Router} from '@angular/router';
import {AlbumsMock} from '../../shared/mocks/albums.mock';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastMessageComponent} from '../../shared/components/toast-message/toast-message.component';
import {InputTextComponent} from '../../shared/components/input-text/input-text.component';
import {CreateAlbumService} from '../../services/create-album.service';
import {CreateAlbums} from '../../shared/mocks/create_albums.mock';

describe('AddAlbumComponent', () => {
  let component: AddAlbumComponent;
  let fixture: ComponentFixture<AddAlbumComponent>;
  const albums = AlbumsMock.response.data;
  const createAlbum = CreateAlbums.response.data;
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
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
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
          provide: CreateAlbumService,
          useValue: {
            createAlbum(): Observable<any> {
              return  of(createAlbum);
            }
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
    fixture = TestBed.createComponent(AddAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check the onChangeGenre method ', () => {
    component.onChangeGenre('PRUEBA');
    expect(component.form.get('genre').value).toEqual('PRUEBA');
  });

  it('check the onChangeSelectRecord method ', () => {
    component.onChangeSelectRecord('PRUEBA');
    expect(component.form.get('recordLabel').value).toEqual('PRUEBA');
  });

  it('check the addedAlbum method when the name has an error ', () => {
    component.name.error.visible = true;
    component.addedAlbum();
    expect(component.warning.description).toEqual('You should fill out all fields, also you have pending fields. ');
  });

  it('check the addedAlbum method when the cover has an error ', () => {
    component.name.error.visible = false;
    component.cover.error.visible = true;
    component.addedAlbum();
    expect(component.warning.description).toEqual('You should fill out all fields, also you have pending fields. ');
  });

  it('check the addedAlbum method when the releaseDate has an error ', () => {
    component.name.error.visible = false;
    component.cover.error.visible = false;
    component.releaseDate.error.visible = true;
    component.addedAlbum();
    expect(component.warning.description).toEqual('You should fill out all fields, also you have pending fields. ');
  });

  it('check the addedAlbum method when the genre has an error ', () => {
    component.name.error.visible = false;
    component.cover.error.visible = false;
    component.releaseDate.error.visible = false;
    component.form.get('genre').setValue('a');
    component.addedAlbum();
    expect(component.warning.description).toEqual('You should fill out all fields, also you have pending fields. ');
  });

  it('check the addedAlbum method when the recordLabel has an error ', () => {
    component.name.error.visible = false;
    component.cover.error.visible = false;
    component.releaseDate.error.visible = false;
    component.form.get('genre').setValue('aaaa');
    component.form.get('recordLabel').setValue('a');
    component.addedAlbum();
    expect(component.warning.description).toEqual('You should fill out all fields, also you have pending fields. ');
  });

  it('check the addedAlbum method when the comment has an error ', () => {
    component.name.error.visible = false;
    component.cover.error.visible = false;
    component.releaseDate.error.visible = false;
    component.form.get('genre').setValue('aaaa');
    component.form.get('recordLabel').setValue('aaaa');
    component.comment.visible = true;
    component.addedAlbum();
    expect(component.warning.description).toEqual('You should fill out all fields, also you have pending fields. ');
  });


  it('check the addedAlbum method when all fields is correct ', () => {
    component.name.error.visible = false;
    component.cover.error.visible = false;
    component.releaseDate.error.visible = false;
    component.form.get('genre').setValue('aaaa');
    component.form.get('recordLabel').setValue('aaaa');
    component.comment.visible = false;
    component.addedAlbum();
    expect(component.warning.title).toEqual('Successful');
    expect(component.warning.image).toEqual('check.svg');
  });

  it('check the date format ', () => {
    expect(component.checkIsValidaDate('1987-08-22').length).toEqual(2);
    expect(component.checkIsValidaDate('1-08-22')).toEqual(null);
  });


  it('check the showAlert method when the name has a length minor of 3', () => {
    component.form.get('name').setValue('aa');
    component.showAlert('name');
    expect(component.name.border ).toEqual('3px solid #711B23');
  });

  it('check the showAlert method when the name has a length major of 3', () => {
    component.form.get('name').setValue('aaaa');
    component.showAlert('name');
    expect(component.name.border ).toEqual('none');
  });


  it('check the showAlert method when the cover has a length minor of 5', () => {
    component.form.get('cover').setValue('aa');
    component.showAlert('cover');
    expect(component.cover.border ).toEqual('3px solid #711B23');
  });

  it('check the showAlert method when the cover has a length major of 3', () => {
    component.form.get('cover').setValue('https://i.ytimg.com/vi/CFFeAa0fJ0Y/maxresdefault.jpg');
    component.showAlert('cover');
    expect(component.cover.border ).toEqual('none');
  });

  it('check the showAlert method when the releaseDate has a length minor of 5', () => {
    component.form.get('releaseDate').setValue('1993');
    component.showAlert('releaseDate');
    expect(component.releaseDate.border ).toEqual('3px solid #711B23');
  });

  it('check the showAlert method when the releaseDate has a length major of 5 but it has an invalid date', () => {
    component.form.get('releaseDate').setValue('----');
    component.showAlert('releaseDate');
    expect(component.releaseDate.border ).toEqual('3px solid #711B23');
  });

  it('check the showAlert method when the releaseDate has a length major of 5 but it has only year', () => {
    component.form.get('releaseDate').setValue('1984');
    component.showAlert('releaseDate');
    expect(component.releaseDate.border ).toEqual('3px solid #711B23');
  });

  it('check the showAlert method when the releaseDate has a length major of 5a and  the format is correct', () => {
    component.form.get('releaseDate').setValue('1984-04-22');
    component.showAlert('releaseDate');
    expect(component.releaseDate.border ).toEqual('none');
  });

  it('check the showAlert method when the comment has a length major of 3', () => {
    component.form.get('comment').setValue('aaaa');
    component.showAlert('comment');
    expect(component.comment.image ).toEqual('');
  });


  it('check the showAlert method when the comment has a length minor of 5', () => {
    component.form.get('comment').setValue('000000000');
    component.showAlert('comment');
    expect(component.comment.image ).toEqual('');
  });

  it('check the validURL method ', () => {
    expect(component.validURL('') ).toEqual(false);
    expect(component.validURL('https://i.ytimg.com/vi/CFFeAa0fJ0Y/maxresdefault.jpg') ).toEqual(true);
  });

  it('check the keyup method ', () => {
    component.keyup('PRUEBA');
    expect(  component.form.get('comment').value ).toEqual('PRUEBA');
  });

  it('check the setValue method ', () => {
    component.setValue('PRUEBA', 'comment');
    expect(  component.form.get('comment').value ).toEqual('PRUEBA');
  });

  it('check the setValue method with comments', () => {
    component.setValue('PRUEBA', 'comment');
    expect(component.form.get('comment').value ).toEqual('PRUEBA');
  });

  it('check the navigation', () => {
    spyOn(window.history, 'back');
    component.cancel();
    expect(window.history.back).toHaveBeenCalled();
  });

});



describe('AddAlbumComponent services has an error', () => {
  let component: AddAlbumComponent;
  let fixture: ComponentFixture<AddAlbumComponent>;
  const albums = AlbumsMock.response.data;
  const createAlbum = CreateAlbums.response.data;
  const headers: Array<Header> = new Array();
  headers.push(new Header(0, 'A', true));
  headers.push(new Header(1, 'B', false));
  headers.push(new Header(2, 'C', false));
  headers.push(new Header(3, 'D', false));
  const observable = new Subject();
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
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
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
          provide: CreateAlbumService,
          useValue: {
            createAlbum(): Observable<any> {
              return  observable;
            }
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
    fixture = TestBed.createComponent(AddAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check the addedAlbum method when all fields is correct and service respond with error ', () => {
    const error = {
      statusCode: 404,
      error: 'Not Found',
      message: 'Cannot GET /albumsa'
    };
    observable.error(error);
    component.name.error.visible = false;
    component.cover.error.visible = false;
    component.releaseDate.error.visible = false;
    component.form.get('genre').setValue('aaaa');
    component.form.get('recordLabel').setValue('aaaa');
    component.comment.visible = false;
    component.addedAlbum();
    expect(component.warning.title).toEqual('Error');
    expect(component.warning.image).toEqual('error.svg');
  });
});
