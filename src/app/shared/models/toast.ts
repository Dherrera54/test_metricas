
export class Toast {

  image: string;
  title: string;
  description: string;
  background: string;
  visible: boolean;

  constructor(image: string, title: string, description: string, background: string, visible: boolean) {
    this.image = image;
    this.title = title;
    this.description = description;
    this.background = background;
    this.visible = visible;
  }
}
