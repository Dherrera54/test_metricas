import { Component, OnInit} from '@angular/core';
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
import {Router} from '@angular/router';
import { AlbumsOfCollector } from 'src/app/model/albumsOfCollector';

@Component({
  selector: 'app-collector-detail',
  templateUrl: './collector-detail.component.html',
  styleUrls: ['./collector-detail.component.scss']
})
export class CollectorDetailComponent implements OnInit {

  @Input() collectorDetail: CollectorDetail;
  id:number;
  albumsCollector: Array<AlbumsOfCollector>;
  albumesOfComments: Array<Albumes>;
  titlesTable: Array<TitlesTables>;


  constructor(private activatedRoute: ActivatedRoute, private collectorService: CollectorService, private albumesService:AlbumesService, private router: Router) {
    this.albumesOfComments = new  Array<Albumes>();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getDetailCollector();
    this.getCollectorAlbums();
    this.getCommentsAlbum(this.collectorDetail);
    this.albumsCollector = new Array<AlbumsOfCollector>()
  }

  addAlbumToPerformer(collectorDetail): void {
    this.router.navigate(['addAlbumToPerformer/', collectorDetail.id]);
  }


  getDetailCollector(): void {
    const item: Array<CollectorDetail> =  this.collectorService.getCollectorsDatos();
    console.log(item);
    this.collectorDetail = item.find(t => t.id == this.id);


  }

  getCollectorAlbums():void{

    this.collectorService.getAlbumsOfCollector(this.id).subscribe(albums=>{this.albumsCollector = albums})

  }

  getCommentsAlbum(collectorDetail:any):void{
    const comments: Array<CommentDetail> = this.collectorDetail.comments;
    const todosAlbumes: Array<Albumes> = this.albumesService.getAlbumes();
    let p:number =0;
    for (let e of comments){
      for(let i of todosAlbumes){
        for(let c of i.comments){
          if(c.id == e.id) {
              this.albumesOfComments[p]=i;
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
