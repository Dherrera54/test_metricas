export abstract class Performer {
    name: string;
    image: string;
    description: string;

  public constructor(name: string, image: string, description: string){
    this.name = name;
    this.image = image;
    this.description = description;

  }
}

export class Musician extends Performer{
   birthDate: Date;

  public constructor(name: string, image: string, description: string, birthDate: Date){
      super(name, image, description);
      this.birthDate = this.birthDate;
  }
}


export class Band extends Performer{
  creationDate: Date;

 public constructor(name: string, image: string, description: string, creationDate: Date){
     super(name, image, description);
     this.creationDate = this.creationDate;
 }
}
