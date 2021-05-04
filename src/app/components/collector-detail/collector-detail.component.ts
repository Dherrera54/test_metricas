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
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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
    //this.albumesOfComments =this.getCommentsAlbum(this.collectorDetail);
  }


  getDetailCollector(): void {
    const item: Array<CollectorDetail> =  this.collectorService.getCollectorsDatos();
    console.log(item);
    this.collectorDetail = item.find(t => t.id == this.id);


  }

  getCollectorAlbums():void{

    const items: Array<Albumes> = this.collectorDetail.collectorAlbums;
    const listaAlbumes: Array<Albumes> = this.albumesService.getAlbumes();
    this.albumsCollector =listaAlbumes.filter(a => items.find(b => a.id === b.id));

  }

  getCommentsAlbum(collectorDetail:any):void{


  }


  goBack(): void {
    window.history.back();
  }

}
