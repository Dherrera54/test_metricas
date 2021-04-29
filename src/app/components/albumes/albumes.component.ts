import { Component, OnInit } from '@angular/core';
import { AlbumesInformation } from '../../shared/models/albumesInformation';
import {AlbumesService} from '../../services/albumes..service';
import {Albumes} from '../../model/albumes';
import {Router} from '@angular/router';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.scss']
})
export class AlbumesComponent implements OnInit {
  albums: Array<AlbumesInformation> = new Array<AlbumesInformation>();

  constructor(private albumesService: AlbumesService, private router: Router ) {
  }

  ngOnInit(): void {
    this.albumesService.getAlbumesServices().subscribe((result: Array<Albumes>) => {
      this.albumesService.setAlbumes(result);
      result.forEach( (it: Albumes) => {
        this.albums.push(new AlbumesInformation(it.id, it.name,  it.recordLabel, it.genre, 'Vendido', it.cover));
      });
      console.log(this.albums);
    });
   }

  showDetailAlbum(index: number): void {
    this.router.navigate(['detail-album', index],  );
  }

}
