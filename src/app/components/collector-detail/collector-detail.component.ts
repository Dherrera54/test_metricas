import { Component, OnInit } from '@angular/core';
import {Collector} from '../../model/collector';
import {EventEmitter, Input, Output} from '@angular/core';
import { CollectorDetail } from 'src/app/model/collectorDetail';
import { ActivatedRoute } from '@angular/router';
import { CollectorService } from 'src/app/services/collector.service';
import { Albumes } from 'src/app/model/albumes';
import { AlbumesService } from 'src/app/services/albumes..service';

@Component({
  selector: 'app-collector-detail',
  templateUrl: './collector-detail.component.html',
  styleUrls: ['./collector-detail.component.css']
})
export class CollectorDetailComponent implements OnInit {

  collectorDetail: CollectorDetail;
  id:number;
  albumsCollector: Array<Albumes>;


  constructor(private activatedRoute: ActivatedRoute, private collectorService: CollectorService, private albumesService:AlbumesService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getDetailCollector();
    this.getCollectorAlbums();
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

  goBack(): void {
    window.history.back();
  }

}
