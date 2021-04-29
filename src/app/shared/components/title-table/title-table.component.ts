import {Component, Input, OnInit} from '@angular/core';
import {AlbumesInformation} from '../../models/albumesInformation';
import {TitlesTables} from '../../models/titlesTables';

@Component({
  selector: 'app-title-table',
  templateUrl: './title-table.component.html',
  styleUrls: ['./title-table.component.scss']
})
export class TitleTableComponent implements OnInit {
  @Input() titlesTable: Array<TitlesTables>;
  constructor() { }

  ngOnInit(): void {
  }

}
