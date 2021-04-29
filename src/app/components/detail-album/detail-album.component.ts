import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlbumesService} from '../../services/albumes..service';
import {Albumes} from '../../model/albumes';

@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.scss']
})
export class DetailAlbumComponent implements OnInit {

  id: number;
  album: Albumes;

  constructor( private activatedRoute: ActivatedRoute, private albumesService: AlbumesService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getDetailAlbum();
  }

  getDetailAlbum(): void {
    const item: Array<Albumes> =  this.albumesService.getAlbumes();
    this.album = item.find(t => t.id == this.id);
  }

  goBack(): void {
    window.history.back();
  }
}
