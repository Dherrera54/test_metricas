import { Component, Input, OnInit } from '@angular/core';
import { Musician } from '../../model/performer';
import { Router, ActivatedRoute } from '@angular/router';
import { MusicianService } from '../../services/musician.service';




@Component({
  selector: 'app-musician-detail',
  templateUrl: './musician-detail.component.html',
  styleUrls: ['./musician-detail.component.scss']
})
export class MusicianDetailComponent implements OnInit {

  musicianDetail: Musician;


  constructor(private route:ActivatedRoute, private router: Router, private musicianService:MusicianService) { }
  id: number;


  ngOnInit() {
    if (this.musicianDetail === undefined){
      this.id = this.route.snapshot.params.id;
      console.log(this.id)
      this.getMusicianDetail();
    }

  }
  goBack(){
    this.router.navigate(['performer']);
    //window.history.back();
  }
  getMusicianDetail():void{
    this.musicianService.getMusicianDetail(this.id)
    .subscribe(musicianDetail =>{this.musicianDetail=musicianDetail;
    });
  }

}
