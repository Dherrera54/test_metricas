import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() text = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  keyup(text: string): void {
    this.text.emit(text);
  }


}
