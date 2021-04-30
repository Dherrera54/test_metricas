import { Component, OnInit } from '@angular/core';
import {Collector} from '../../model/collector';
import {EventEmitter, Input, Output} from '@angular/core';
import { CollectorDetail } from 'src/app/model/collectorDetail';
import { ActivatedRoute } from '@angular/router';
import { CollectorService } from 'src/app/services/collector.service';

@Component({
  selector: 'app-collector-detail',
  templateUrl: './collector-detail.component.html',
  styleUrls: ['./collector-detail.component.css']
})
export class CollectorDetailComponent implements OnInit {

  collectorDetail: CollectorDetail;
  id:number;

  constructor(private activatedRoute: ActivatedRoute, private collectorService: CollectorService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getDetailCollector();
  }


  getDetailCollector(): void {
    const item: Array<CollectorDetail> =  this.collectorService.getCollectorsDatos();
    this.collectorDetail = item.find(t => t.id == this.id);
  }

}
