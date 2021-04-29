import { TestBed } from '@angular/core/testing';

import { HeaderService } from './header.service';
import {Header} from '../models/header';

describe('HeaderService', () => {
  let service: HeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check the data when the user has menu', () => {
    const headers: Array<Header> = new Array();
    headers.push(new Header(0, 'Home', true));
    headers.push(new Header(1, 'Coleccionistas', false));
    headers.push(new Header(2, 'Artistas', false));
    headers.push(new Header(3, 'Buscador', false));
    service.setHeaders(headers);
    expect(service.getHeadersOptions()[0].index).toEqual(0);
  });

  it('check the method was been called', () => {
    const headers: Array<Header> = new Array();
    headers.push(new Header(0, 'Home', true));
    headers.push(new Header(1, 'Coleccionistas', false));
    headers.push(new Header(2, 'Artistas', false));
    headers.push(new Header(3, 'Buscador', false));
    spyOn(service, 'setHeaders');
    service.setHeaders(headers);
    expect(service.setHeaders).toHaveBeenCalled();
  });
});
