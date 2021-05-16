import {Toast} from './toast';

export class InputText {

  title: string;
  type: string;
  id: string;
  placeHolder: string;
  background: string;
  border: string;
  borderRadius: string;
  height: string;
  error: Toast;
  maxlength: number;
  minlength: number;
  value: string;
  pattern: RegExp;

  constructor(title ?: string, type?: string, id?: string, placeHolder?: string, background?: string, border?: string,
              borderRadius?: string,
              height?: string, error?: Toast, maxlength?: number, minlength?: number, value?: string, pattern?: RegExp) {
    this.title = title;
    this.type = type;
    this.id = id;
    this.placeHolder = placeHolder;
    this.background = background;
    this.border = border;
    this.borderRadius = borderRadius;
    this.height = height;
    this.error = error;
    this.maxlength = maxlength;
    this.minlength = minlength;
    this.value = value;
    this.pattern = pattern;
  }
}
