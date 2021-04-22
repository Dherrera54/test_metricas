import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExampleService} from '../../services/example.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private albumsService: ExampleService) { }

  ngOnInit(): void {
  }

  llamarServicioDeEjemplo(): void  {
    this.albumsService.getServicesExample().subscribe(result => {
      console.log(result);
    });
  }

}
