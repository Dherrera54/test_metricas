import { AlbumInsideCollector } from './albumInsideCollector';
import {Collector} from './collector'

export class AlbumsOfCollector {
  id: number;
  price: number;
  status:string;
  album: AlbumInsideCollector;
  collector: Collector;

  constructor(id: number, price:number, status:string) {
    this.id = id;
    this.price = price;
    this.status = status;
  }
}
