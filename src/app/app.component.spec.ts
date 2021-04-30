import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {CardAlbumesComponent} from './shared/components/card-albumes/card-albumes.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PerformerListComponent} from './components/performer-list/performer-list.component';
import {CollectorListarComponent} from './components/collector-listar/collector-listar.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './shared/components/header/header.component';
import {Router} from '@angular/router';
import {TitleTableComponent} from './shared/components/title-table/title-table.component';
import {SearchComponent} from './shared/components/search/search.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
      declarations: [
        PerformerListComponent,
        CollectorListarComponent,
        AppComponent,
        HeaderComponent,
        CardAlbumesComponent,
        TitleTableComponent,
        SearchComponent
      ],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('check the header size ', () => {
    expect(component.getHeader().length).toEqual(4);
  });

  it('check the first item in header  ', () => {
    expect(component.getHeader()[0].title).toEqual('Home');
    expect(component.getHeader()[0].enabled).toEqual(true);
    expect(component.getHeader()[0].index).toEqual(0);
  });

  it('check the first second in header  ', () => {
    expect(component.getHeader()[1].title).toEqual('Coleccionistas');
    expect(component.getHeader()[1].enabled).toEqual(false);
    expect(component.getHeader()[1].index).toEqual(1);
  });

  it('check the first third in header  ', () => {
    expect(component.getHeader()[2].title).toEqual('Artistas');
    expect(component.getHeader()[2].enabled).toEqual(false);
    expect(component.getHeader()[2].index).toEqual(2);
  });

  it('check the first fourth in header  ', () => {
    expect(component.getHeader()[3].title).toEqual('Buscador');
    expect(component.getHeader()[3].enabled).toEqual(false);
    expect(component.getHeader()[3].index).toEqual(3);
  });


  it('should trigger click option albumes', () => {
    const router = TestBed.get(Router);
    component.showItem(0);
    expect(router.navigate).toHaveBeenCalledWith(['albumes']);
  });

  it('should trigger click option collector', () => {
    const router = TestBed.get(Router);
    component.showItem(1);
    expect(router.navigate).toHaveBeenCalledWith(['collector']);
  });

  it('should trigger click option performer', () => {
    const router = TestBed.get(Router);
    component.showItem(2);
    expect(router.navigate).toHaveBeenCalledWith(['performer']);
  });

});
