import { Component, Input, OnInit } from '@angular/core';
import { Band } from '../../model/performer';
import { BandService } from '../../services/band.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PrizesService } from '../../services/prizes.service';
import { Observable } from 'rxjs';
import { Prize } from 'src/app/model/prize';
import { PerformerPrizes } from '../../model/prize';


@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss']
})
export class BandDetailComponent implements OnInit {

  @Input() bandDetail: Band;
 public prizes:Array<Prize>=[];

  constructor(private route:ActivatedRoute,
              private router: Router,
              private bandService:BandService,
              private prizesService:PrizesService,
             ) { }
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
      this.getBandPrizes(this.bandDetail);
    });

  }
  getBandPrizes(bandDetail):void{
    this.prizesService.getPrizes()
    .subscribe(prizes =>{
    console.log(prizes, bandDetail.performerPrizes)
    for( let i:number =0;i<bandDetail.performerPrizes.length;i++){
      for( let j:number =0;j<prizes.length;j++){
        if(bandDetail.performerPrizes[i].id===prizes[j].id){
          this.prizes.push(prizes[j]);
         console.log(this.prizes)
        }

      }

    }

  });

  }
  addMusician(bandDetail){
    this.router.navigate(['create-musician/band/', bandDetail.id]  );
  }
}
