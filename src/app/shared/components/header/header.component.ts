import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AlbumesInformation} from '../../models/albumesInformation';
import {Header} from '../../models/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() header: Array<Header>;
  @Output() index: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  clickItem(i: number): void {
     this.index.emit(i);
  }

}
