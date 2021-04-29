import { Component, OnInit } from '@angular/core';
import {Collector} from '../../model/collector';
import {CollectorService} from '../../services/collector.service';
import {CollectorDetail} from '../../model/collectorDetail';

@Component({
  selector: 'app-collector-listar',
  templateUrl: './collector-listar.component.html',
  styleUrls: ['./collector-listar.component.scss']
})
export class CollectorListarComponent implements OnInit {

  selectedCollector:Collector;
  selected = false;
  constructor(private collectorService: CollectorService) { }
  collectors:Array<CollectorDetail>;

  onSelected(c:Collector):void{
    this.selected=true;
    this.selectedCollector = c ;
  }

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
