import { Albumes } from './albumes';

export abstract class Performer {
    id: number;
    name: string;
    image: string;
    description: string;
    albums: Array<Albumes>;

  public constructor(id?: number, name?: string, image?: string, description?: string, albums?: Array<Albumes>){
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.albums =albums;

  }
}

export class Musician extends Performer{
   birthDate: string;

  public constructor(id?: number, name?: string, image?: string, description?: string, albums?: Array<Albumes>, birthDate?: string){
      super(id, name, image, description, albums);
      this.birthDate = this.birthDate;
  }
}


export class Band extends Performer{
  creationDate: string;
  musicians: Array<Musician>;


 public constructor(id?: number, name?: string, image?: string, description?: string, albums?: Array<Albumes>,  creationDate?: string, musicians?: Array<Musician>){
     super(id, name, image, description, albums);
     this.creationDate = this.creationDate;
     this.musicians =this.musicians;
 }
}
