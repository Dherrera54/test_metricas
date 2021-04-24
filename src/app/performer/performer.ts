export abstract class Performer {
    name: String;
    image: String;
    description: String;

  public constructor(name: String, image: String, description: String){
    this.name =name;
    this.image =image;
    this.description = description;

  }
}
export class Musician extends Performer{
   birthDate:Date;

  public constructor(name: String, image: String, description: String, birthDate:Date){
      super(name, image, description)
      this.birthDate =this.birthDate;
  }
}

export class Band extends Performer{
  creationDate:Date;

 public constructor(name: String, image: String, description: String, creationDate:Date){
     super(name, image, description)
     this.creationDate =this.creationDate;
 }
}
