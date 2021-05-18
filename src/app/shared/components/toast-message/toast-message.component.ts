import {Component, Input, OnInit} from '@angular/core';
import {Toast} from '../../models/toast';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent implements OnInit {
  @Input() toast: Toast;
  constructor() { }

  ngOnInit(): void {
  }

}
