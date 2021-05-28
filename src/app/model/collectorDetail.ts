
import { AlbumsOfCollector } from "./albumsOfCollector";
import { Collector } from "./collector";
import { CommentDetail } from "./commentDetail";
import { Performer } from "./performer";
import { CollectorAlbum } from "./collectorAlbum";

export class CollectorDetail extends Collector{
  collectorAlbums:Array<CollectorAlbum>;
  favoritePerformers:Array<Performer>;
  comments:Array<CommentDetail>
}
