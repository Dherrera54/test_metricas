import { Component, Input, OnInit } from '@angular/core';
import { Band } from '../../model/performer';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss']
})
export class BandDetailComponent implements OnInit {

  @Input() bandDetail: Band;

  constructor() { }

  ngOnInit() {
    console.log(this.bandDetail.id);
  }

}
