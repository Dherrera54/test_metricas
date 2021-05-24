import {Collector} from './collector'

export class FavoriteMusician{

  id:number;
  name:string;
  image:string;
  description:string;
  creationDate: string;
  collectors:Array<Collector>;

  constructor(
    id: number,
    name: string,
    image: string,
    descritpion: string,
    creationDate: string,
    collectors:Array<Collector>
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = descritpion;
    this.creationDate = creationDate;
    this.collectors = collectors;
  }



}
