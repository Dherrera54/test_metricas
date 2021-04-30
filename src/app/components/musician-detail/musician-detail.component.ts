import { Component, Input, OnInit } from '@angular/core';
import { Musician } from '../../model/performer';
import { Router } from '@angular/router';
import { MusicianService } from '../../services/musician.service';




@Component({
  selector: 'app-musician-detail',
  templateUrl: './musician-detail.component.html',
  styleUrls: ['./musician-detail.component.scss']
})
export class MusicianDetailComponent implements OnInit {

  @Input() musicianDetail: Musician;

  constructor(private router: Router, private musicianService:MusicianService) { }

  ngOnInit() {
    console.log(this.musicianDetail.id )
  }
 goBack(){
  this.musicianService.setSelected(false);

 }
}
