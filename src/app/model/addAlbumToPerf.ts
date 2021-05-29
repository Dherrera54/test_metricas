export class AlbumToPerformer{

  private price:number;
  private status: string;


  constructor( price:number,status:string){
    this.status = status;
    this.price = price;
  }


  get getstatus():string {return this.status}
  get getprice():number {return this.price}


  set sestatus(status:string){
    this.status = status;
  }

  set setprice(price:number){
    this.price = price;
  }
}
