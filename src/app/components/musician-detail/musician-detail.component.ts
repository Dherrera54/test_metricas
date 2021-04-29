import { Component, Input, OnInit } from '@angular/core';
import { Musician } from '../../model/performer';



@Component({
  selector: 'app-musician-detail',
  templateUrl: './musician-detail.component.html',
  styleUrls: ['./musician-detail.component.scss']
})
export class MusicianDetailComponent implements OnInit {

  @Input() musicianDetail: Musician;

  constructor() { }

  ngOnInit() {
    console.log(this.musicianDetail.id, )
  }

}
