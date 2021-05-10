import { Component, Input, OnInit } from '@angular/core';
import { Band } from '../../model/performer';
import { BandService } from '../../services/band.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss']
})
export class BandDetailComponent implements OnInit {

  @Input() bandDetail: Band;

  constructor(private route:ActivatedRoute, private router: Router,private bandService:BandService) { }
  id: number;

  ngOnInit() {
    if (this.bandDetail === undefined){
      this.id = this.route.snapshot.params.id;
      console.log(this.id)

      this.getBandDetail(this.id);
    }
  }

  goBack(){
    this.router.navigate(['performer']);

   }
   getBandDetail(id:number):void{
    this.bandService.getBandDetail(id)
    .subscribe(bandDetail =>{this.bandDetail=bandDetail;
    });
  }
}
