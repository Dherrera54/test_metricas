import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Musician} from '../model/performer';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MusicianService {
  private apiUrl = environment.baseUrl + 'musicians';

  constructor(private http: HttpClient) {
  }

  getMusicians(): Observable<Musician[]> {

    return this.http.get<Musician[]>(this.apiUrl);
  }
}
