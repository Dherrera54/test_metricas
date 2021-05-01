import { Component, OnInit } from '@angular/core';
import {Collector} from '../../model/collector';
import {EventEmitter, Input, Output} from '@angular/core';
import { CollectorDetail } from 'src/app/model/collectorDetail';
import { ActivatedRoute } from '@angular/router';
import { CollectorService } from 'src/app/services/collector.service';
import { Albumes } from 'src/app/model/albumes';
import { AlbumesService } from 'src/app/services/albumes..service';
import { CommentDetail } from 'src/app/model/commentDetail';
import { TitlesTables } from 'src/app/shared/models/titlesTables';

@Component({
  selector: 'app-collector-detail',
  templateUrl: './collector-detail.component.html',
  styleUrls: ['./collector-detail.component.scss']
})
export class CollectorDetailComponent implements OnInit {

  collectorDetail: CollectorDetail;
  id:number;
  albumsCollector: Array<Albumes>;
  albumesOfComments: Array<Albumes>;
  titlesTable: Array<TitlesTables>;


  constructor(private activatedRoute: ActivatedRoute, private collectorService: CollectorService, private albumesService:AlbumesService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getDetailCollector();
    this.getCollectorAlbums();
    //this.getCommentsAlbum();
  }


  getDetailCollector(): void {
    const item: Array<CollectorDetail> =  this.collectorService.getCollectorsDatos();
    this.collectorDetail = item.find(t => t.id == this.id);
  }

  getCollectorAlbums():void{

    const items: Array<Albumes> = this.collectorDetail.collectorAlbums;
    const listaAlbumes: Array<Albumes> = this.albumesService.getAlbumes();

    this.albumsCollector =listaAlbumes.filter(a => items.find(b => a.id === b.id));


  }

  getCommentsAlbum():void{

    const comments: Array<CommentDetail> = this.collectorDetail.comments;
    const todosAlbumes: Array<Albumes> = this.albumesService.getAlbumes();
    let p:number =0;

    for (let e of comments){
      for(let i of todosAlbumes){
        for(let c of i.comments){
          if(c.id == e.id){
            this.albumesOfComments[p]=i;
            console.log(this.albumesOfComments[p].name);
            p++;
          }
        }
      }
    }

  }


  goBack(): void {
    window.history.back();
  }

}
