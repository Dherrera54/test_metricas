import { Albumes } from './albumes';
import { Prize, PerformerPrizes } from './prize';

export abstract class Performer {
    id: number;
    name: string;
    image: string;
    description: string;
    albums: Array<Albumes>;
    performerPrizes: Array<PerformerPrizes>;

  public constructor(id?: number, name?: string, image?: string, description?: string, albums?: Array<Albumes>,  performerPrizes?:Array<PerformerPrizes>){
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.albums =albums;
    this.performerPrizes=performerPrizes;

  }
}

export class Musician extends Performer{
   birthDate: string;

  public constructor(id?: number, name?: string, image?: string, description?: string, albums?: Array<Albumes>,  performerPrizes?:Array<PerformerPrizes>, birthDate?: string){
      super(id, name, image, description, albums, performerPrizes);
      this.birthDate = birthDate;
  }
}


export class Band extends Performer{
  creationDate: string;
  musicians: Array<Musician>;



 public constructor(id?: number, name?: string, image?: string, description?: string, albums?: Array<Albumes>,  creationDate?: string, musicians?: Array<Musician>,  performerPrizes?:Array<PerformerPrizes>){
     super(id, name, image, description, albums, performerPrizes);
     this.creationDate = creationDate;
     this.musicians =musicians;

 }
}
