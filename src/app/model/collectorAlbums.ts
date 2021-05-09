export class CollectorAlbums {

  id: number;
  price: number;
  status:string;


  constructor(id: number, price:number, status:string) {
    this.id = id;
    this.price = price;
    this.status = status;
  }
}
