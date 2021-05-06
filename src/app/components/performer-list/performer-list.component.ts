import { Component, OnInit } from '@angular/core';
import { Performer, Musician, Band } from '../../model/performer';
import { BandService } from '../../services/band.service';
import { MusicianService } from '../../services/musician.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-performer-list',
  templateUrl: './performer-list.component.html',
  styleUrls: ['./performer-list.component.scss']
})
export class PerformerListComponent implements OnInit {

  constructor(private bandService: BandService, private musicianService:MusicianService, private router: Router) { }

  selectedMusician: Musician;
  selectedBand : Band;
  selected: boolean = false;
  bandBool: boolean=false;
  musicianBool: boolean=false;

  public musicians: Array<Musician>;
  public bands: Array<Band>;

  getBandList(){
    this.bandService.getBands().subscribe(result => {
      this.bands = result;});
    this.bandService.getBands().subscribe(result => {
      console.log(result);});
  }

  getMusicianList(){
    this.musicianService.getMusicians().subscribe(result => {
      this.musicians = result;});
      this.musicianService.getMusicians().subscribe(result => {
        console.log(result);});
  }

  ngOnInit() {
    this.selected=this.musicianService.getSelected();
    this.getBandList();
    this.getMusicianList();
  }
  onSelectedMusician(musician: Musician):void{
    this.selectedMusician=musician;
    this.router.navigate(['detail-musician', musician.id],  );
    /*this.selected=true;

   */

  }
  onSelectedBand(band: Band):void{
    this.selectedBand=band;
    this.router.navigate(['detail-band', band.id],  );

  }



  getSelected():void{
    this.selected=this.musicianService.getSelected();
  }
}
