import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Routes} from '../const/routes';

@Injectable({
  providedIn: 'root'
})
export class ManagerErrorService {

  constructor(private router: Router) { }

  setStatusCode(status: number): void  {
     if (status === 0 ) {
       this.router.navigate([Routes.ERROR_INTERNET]);
     } else if (status === 500 ) {
       this.router.navigate([Routes.ERROR_INTERNET]);
    } else if (status === 4004 ) {
       this.router.navigate([Routes.ERROR_INTERNET]);
     }
  }
}
