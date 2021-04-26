import { Component, OnInit } from '@angular/core';
import { AlbumesInformation } from '../../shared/models/albumesInformation';
import {AlbumesService} from '../../services/albumes..service';
import {Albumes} from '../../model/albumes';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.scss']
})
export class AlbumesComponent implements OnInit {
  albums: Array<AlbumesInformation>;

  constructor(private albumesService: AlbumesService ) {
    this.albums = new Array<AlbumesInformation>();
  }

  ngOnInit(): void {
    this.albumesService.getAlbumes().subscribe((result: Array<Albumes>) => {
      console.log(result);
      result.forEach( (it: Albumes) => {
        this.albums.push(new AlbumesInformation(it.name,  it.recordLabel, it.genre, 'Vendido', it.cover));
      });
    });

   }

}
