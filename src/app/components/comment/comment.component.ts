import { Component, OnInit } from '@angular/core';
import {CommentDetail} from '../../model/commentDetail';
import {ActivatedRoute} from '@angular/router';
import {AlbumesService} from '../../services/albumes..service';
import {Albumes} from '../../model/albumes';
import {TitlesTables} from '../../shared/models/titlesTables';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  album: Albumes;
  titlesTable: Array<TitlesTables>;
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private albumesService: AlbumesService) {
    this.titlesTable = new Array<TitlesTables>();
    this.titlesTable.push(new TitlesTables('Contenido'));
    this.titlesTable.push(new TitlesTables('Calificacion'));
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParams.id;
    this.getComments();
  }

  getComments(): void {
    const item: Array<Albumes> =  this.albumesService.getAlbumes();
    this.album =  item.find(t => t.id == this.id);
    console.log(this.album);
  }

  goBack(): void {
    window.history.back();
  }

}
