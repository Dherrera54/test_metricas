import { Component, Input, OnInit } from '@angular/core';
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

  @Input() selectedMusician: Musician;
  @Input() selectedBand : Band;
  selected: boolean = false;

  public musicians: Array<Musician>;
  public bands: Array<Band>;

  ngOnInit() {
    this.getBandList();
    this.getMusicianList();
  }
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
  onSelectedMusician(musician: Musician):void{
    this.selected=true;
    this.selectedMusician=musician;
    this.router.navigate(['detail-musician', musician.id],  );

  }
  onSelectedBand(band: Band):void{
    this.selected=true;
    this.selectedBand=band;
    this.router.navigate(['detail-band', band.id],  );

  }

  addMusicianToFavorite(selectedMusician): void {
    this.router.navigate(['addToFavorite/', selectedMusician.id]);
  }

  addBandToFavorite(selectedBand): void {
    this.router.navigate(['addToFavoriteBand/', selectedBand.id]);
  }
}
