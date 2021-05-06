import {Component, OnInit} from '@angular/core';
import {Header} from './shared/models/header';
import {HeaderService} from './shared/services/header.service';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front';
  private headers: Array<Header> = new Array();

  constructor(private headerService: HeaderService, private router: Router) {

  }

  initHeaders(): void  {
    this.headers = new Array();
    this.headers.push(new Header(0, 'Home', true));
    this.headers.push(new Header(1, 'Coleccionistas', false));
    this.headers.push(new Header(2, 'Artistas', false));
    this.headers.push(new Header(3, 'Buscador', false));
    this.headerService.setHeaders(this.headers);
  }


  getHeader(): Array<Header> {
    return  this.headerService.getHeadersOptions();
  }

  showItem(index: number): void {
    this.headers.map( x => {
      x.index === index ?  x.enabled = true : x.enabled = false;
    });

    switch (index) {
      case 0: {
        this.router.navigate(['albumes']);
        break;
      }
      case 1: {
        this.router.navigate(['collector']);
        break;
      }
      case 2: {
        this.router.navigate(['performer']);
        break;
      }
      case 3: {
        this.router.navigate(['albumes']);
        break;
      }
    }
  }

  ngOnInit(): void {
    this.initHeaders();
    this.showItem(0);
  }
}
