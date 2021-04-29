import { Component, OnInit } from '@angular/core';
import {Collector} from '../../model/collector';
import {EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-collector-detail',
  templateUrl: './collector-detail.component.html',
  styleUrls: ['./collector-detail.component.css']
})
export class CollectorDetailComponent implements OnInit {

  @Input() collectorDetail: Collector;

  constructor() { }

  ngOnInit() {
    console.log(this.collectorDetail.id);
  }

}
