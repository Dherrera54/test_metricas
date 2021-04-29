
export class AlbumesInformation {

  id: number;
  titleAlbum: string;
  groupAlbum: string;
  genderAlbum: string;
  stateAlbum: string;
  image: string;

  constructor(id: number, titleAlbum: string, groupAlbum: string, genderAlbum: string, stateAlbum: string, image: string) {
    this.id = id;
    this.titleAlbum = titleAlbum;
    this.groupAlbum = groupAlbum;
    this.genderAlbum = genderAlbum;
    this.stateAlbum = stateAlbum;
    this.image = image;
  }
}
