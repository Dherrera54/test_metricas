import { Component, OnInit } from '@angular/core';
import {Collector} from '../collector';
import {CollectorService} from '../collector.service'

@Component({
  selector: 'app-collector-listar',
  templateUrl: './collector-listar.component.html',
  styleUrls: ['./collector-listar.component.scss']
})
export class CollectorListarComponent implements OnInit {

  constructor(private collectorService: CollectorService) { }
  collectors:Array<Collector>;

  getCollectors(): void {
    this.collectorService.getCollectors()
      .subscribe(collectors => {
        this.collectors = collectors;
      });
  }

  ngOnInit() {
    this.getCollectors();
  }

}
