export abstract class Performer {
    id: number;
    name: string;
    image: string;
    description: string;

  public constructor(id?: number, name?: string, image?: string, description?: string){
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;

  }
}

export class Musician extends Performer{
   birthDate: Date;

  public constructor(id?: number, name?: string, image?: string, description?: string, birthDate?: Date){
      super(id, name, image, description);
      this.birthDate = this.birthDate;
  }
}


export class Band extends Performer{
  creationDate: Date;

 public constructor(id?: number, name?: string, image?: string, description?: string, creationDate?: Date){
     super(id, name, image, description);
     this.creationDate = this.creationDate;
 }
}
