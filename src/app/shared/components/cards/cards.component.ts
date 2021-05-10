import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../../models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() albumes: Array<Card>;
  @Output() index: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  clickItem(i: number): void {
    this.index.emit(i);
  }
}
