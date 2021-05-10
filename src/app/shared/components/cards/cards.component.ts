import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AlbumesInformation} from '../../models/albumesInformation';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() albumes: Array<AlbumesInformation>;
  @Output() index: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  clickItem(i: number): void {
    this.index.emit(i);
  }
}
