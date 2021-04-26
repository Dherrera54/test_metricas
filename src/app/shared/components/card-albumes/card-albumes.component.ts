import {Component, Input, OnInit} from '@angular/core';
import {RutaInformation} from '../../models/rutaInformation';

@Component({
  selector: 'app-card-albumes',
  templateUrl: './card-albumes.component.html',
  styleUrls: ['./card-albumes.component.scss']
})
export class CardAlbumesComponent implements OnInit {

  @Input() rutaActive: Array<RutaInformation>;
  constructor() { }

  ngOnInit(): void {
  }

}
