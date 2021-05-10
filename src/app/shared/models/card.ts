
export class Card {

  id: number;
  titleAlbum: string;
  groupAlbum: string;
  genderAlbum: string;
  stateAlbum: string;
  image: string;
  height: boolean;

  constructor(id: number, titleAlbum: string, groupAlbum: string, genderAlbum: string, stateAlbum: string, image: string, height?:boolean) {
    this.id = id;
    this.titleAlbum = titleAlbum;
    this.groupAlbum = groupAlbum;
    this.genderAlbum = genderAlbum;
    this.stateAlbum = stateAlbum;
    this.image = image;
    this.height=height;
  }
}
