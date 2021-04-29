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
   birthDate: Date;

  public constructor(id?: number, name?: string, image?: string, description?: string, albums?: Array<Albumes>, birthDate?: Date){
      super(id, name, image, description, albums);
      this.birthDate = this.birthDate;
  }
}


export class Band extends Performer{
  creationDate: Date;

 public constructor(id?: number, name?: string, image?: string, description?: string, albums?: Array<Albumes>,  creationDate?: Date){
     super(id, name, image, description, albums);
     this.creationDate = this.creationDate;
 }
}
