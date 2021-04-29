import { Component, OnInit } from '@angular/core';
import {CommentDetail} from '../../model/commentDetail';
import {ActivatedRoute} from '@angular/router';
import {AlbumesService} from '../../services/albumes..service';
import {Albumes} from '../../model/albumes';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  album: Albumes;
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private albumesService: AlbumesService) { }

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
