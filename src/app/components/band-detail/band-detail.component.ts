import { Component, Input, OnInit } from '@angular/core';
import { Band } from '../../model/performer';
import { BandService } from '../../services/band.service';


@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss']
})
export class BandDetailComponent implements OnInit {

  @Input() bandDetail: Band;

  constructor(private bandService:BandService) { }

  ngOnInit() {
    console.log(this.bandDetail.id);
  }

  goBack(){
    this.bandService.setSelected(false);

   }
}
