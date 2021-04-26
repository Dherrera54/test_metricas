import { Component, OnInit } from '@angular/core';
import { AlbumesInformation } from '../../shared/models/albumesInformation';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.scss']
})
export class AlbumesComponent implements OnInit {
  albums: Array<AlbumesInformation>;

  constructor() {
    this.albums = new Array<AlbumesInformation>();
  }

  ngOnInit(): void {
    this.albums.push(new AlbumesInformation('MANUEL GONZALEZ A',  'MANUEL', 'MANUEL', 'Vendido', 'https://3.bp.blogspot.com/-z40PWZQxAXA/V4wWkciZR4I/AAAAAAAAAGA/3rh6zL3cjTIX8TLhVFO9BAhkZQ2Aoh3VQCLcB/s1600/grandes-exitos-mega.jpg'));
    this.albums.push(new AlbumesInformation( 'MANUEL GONZALEZ B',  'MANUEL', 'MANUEL', 'Vendido', 'https://3.bp.blogspot.com/-z40PWZQxAXA/V4wWkciZR4I/AAAAAAAAAGA/3rh6zL3cjTIX8TLhVFO9BAhkZQ2Aoh3VQCLcB/s1600/grandes-exitos-mega.jpg'));
    this.albums.push(new AlbumesInformation( 'MANUEL GONZALEZ C',  'MANUEL', 'MANUEL', 'Vendido', 'https://3.bp.blogspot.com/-z40PWZQxAXA/V4wWkciZR4I/AAAAAAAAAGA/3rh6zL3cjTIX8TLhVFO9BAhkZQ2Aoh3VQCLcB/s1600/grandes-exitos-mega.jpg'));
  }

}
