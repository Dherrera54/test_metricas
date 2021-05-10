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
import {CollectorDetailComponent} from './collector-detail.component'

describe('CollectorDetailComponent', () => {
  let component: CollectorDetailComponent;
  let fixture: ComponentFixture<CollectorDetailComponent>;
  let httpMock: HttpTestingController;
  const collectors : Array<CollectorDetail> = CollectorsMock.response.data;
  const albums = AlbumsMock.response.data;

  beforeEach(async(() =>  {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [CollectorService,{
        provide: Router,
        useValue: {
          navigate: jasmine.createSpy('navigate'),
        }},{
          provide: ActivatedRoute,
          useValue: {
            snapshot: {params: {id: 100}}
          }},
          {
            provide: CollectorService,
            useValue: {
              getCollectorsDatos(): Array<CollectorDetail> {
                return  collectors;
              },
            },
          },
          {
            provide: AlbumesService,
            useValue: {
              getAlbumes(): Array<Albumes> {
                return  albums;
              },
            },
          }]
    }).compileComponents;
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
    expect(component.collectorDetail.email).toEqual(collectors[0].email);
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

  it('check the getCollectorAlbums', () => {
    component.getCommentsAlbum(collectors[0]);
    expect(component.albumesOfComments[0].comments).toEqual(collectors[0].comments);
  });
});
