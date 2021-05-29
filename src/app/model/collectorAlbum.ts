import { AlbumInsideCollector } from './albumInsideCollector';
import {Collector} from './collector'

export class CollectorAlbum {
  id: number;
  price: number;
  status:string;

  constructor(id: number, price:number, status:string) {
    this.id = id;
    this.price = price;
    this.status = status;
  }
}
