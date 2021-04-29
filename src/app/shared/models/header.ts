
export class Header {

  index: number;
  title: string;
  enabled: boolean;

  constructor(index: number, title: string, enabled: boolean) {
    this.index = index;
    this.title = title;
    this.enabled = enabled;
  }
}
