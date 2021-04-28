import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AlbumesInformation} from '../../models/albumesInformation';

@Component({
  selector: 'app-card-albumes',
  templateUrl: './card-albumes.component.html',
  styleUrls: ['./card-albumes.component.scss']
})
export class CardAlbumesComponent implements OnInit {

  @Input() albumes: Array<AlbumesInformation>;
  @Output() index: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  clickItem(i: number): void {
    this.index.emit(i);
  }
}
