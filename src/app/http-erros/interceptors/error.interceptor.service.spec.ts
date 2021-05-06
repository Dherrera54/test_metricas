import {ErrorInterceptorService} from './error.interceptor.service';
import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {ManagerErrorService} from '../services/manager-error.service';
import {Router} from '@angular/router';
import {Routes} from '../const/routes';

describe('Error.InterceptorService', () => {
  let errorInterceptor: ErrorInterceptorService;
  let http: HttpTestingController;
  let httpClient: HttpClient;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ManagerErrorService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptorService,
          multi: true,
        },
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    errorInterceptor = TestBed.get(ErrorInterceptorService);
    http = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(errorInterceptor).toBeTruthy();
  });

  it('should catch -1', done => {
    const router = TestBed.get(Router);
    httpClient.get('/error').subscribe(() => { console.log('-1'); }, () => done());
    http.expectOne('/error').error(new ErrorEvent('Error -1'), { status: -1 });
    expect(router.navigate).toHaveBeenCalledWith([Routes.ERROR_INTERNET]);
  });

});
