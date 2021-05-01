import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlbumesService} from '../../services/albumes..service';
import {Albumes} from '../../model/albumes';
import {TitlesTables} from '../../shared/models/titlesTables';

@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.scss']
})
export class DetailAlbumComponent implements OnInit {

  id: number;
  album: Albumes;
  titlesTable: Array<TitlesTables>;

  constructor( private activatedRoute: ActivatedRoute, private albumesService: AlbumesService,  private router: Router) {
    this.titlesTable = new Array<TitlesTables>();
    this.titlesTable.push(new TitlesTables('Track'));
    this.titlesTable.push(new TitlesTables('Nombre'));
    this.titlesTable.push(new TitlesTables('Duracion'));
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getDetailCollector();
  }

  getDetailCollector(): void {
    const item: Array<Albumes> =  this.albumesService.getAlbumes();
    this.album = item.find(t => t.id == this.id);
  }

  goBack(): void {
    window.history.back();
  }

  checkComment(): void {
    this.router.navigate(['comment'], {queryParams: { id : this.id } });
  }
}
