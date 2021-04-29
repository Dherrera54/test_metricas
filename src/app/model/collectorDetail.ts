import { Albumes } from "./albumes";
import { Collector } from "./collector";
import { Performer } from "./performer";

export class CollectorDetail extends Collector{
  collectorAlbums:Array<Albumes>;
  favoritePerformers:Array<Performer>;
}
