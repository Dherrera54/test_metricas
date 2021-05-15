export class Prize{

    id: number;
    organization: string;
    name: string;
    description: string;



  public constructor(id?: number, organization?:string, name?: string, description?: string){
    this.id = id;
    this.organization =this.organization
    this.name = name;
    this.description = description;

  }

}
export class PerformerPrizes{

    id:number;
    premiationDate:string;
  public constructor(id?: number,  premiationDate?:string){
      this.id = id;
      this.premiationDate=premiationDate;
  }
}
