import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {InputText} from '../../models/inputText';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Output() text = new EventEmitter<string>();
  @Input() element: InputText;
  constructor() { }

  ngOnInit(): void {
  }

  onPaste(event: string, input: HTMLInputElement): void {
    this.keyup(event, input);
  }

  keyup(text: string, input: HTMLInputElement): void {
    this.element.value = text.replace(this.element.pattern, '');
    input.value = this.element.value;
    this.text.emit(this.element.value);
  }
}
