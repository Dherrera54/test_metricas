import {Component, Input, OnInit} from '@angular/core';
import {AlbumesInformation} from '../../models/albumesInformation';

@Component({
  selector: 'app-card-albumes',
  templateUrl: './card-albumes.component.html',
  styleUrls: ['./card-albumes.component.scss']
})
export class CardAlbumesComponent implements OnInit {

  @Input() albumes: Array<AlbumesInformation>;
  constructor() { }

  ngOnInit(): void {
  }

}
