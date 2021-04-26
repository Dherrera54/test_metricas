import {RutaItems} from './rutaItems';

export class RutaInformation {
  nameRuta: string;
  name: string;
  fields: Array<RutaItems>;
  image: string;

  constructor(nameRuta: string, name: string, fields: Array<RutaItems>, image: string) {
    this.nameRuta = nameRuta;
    this.name = name;
    this.fields = fields;
    this.image = image;
  }
}
