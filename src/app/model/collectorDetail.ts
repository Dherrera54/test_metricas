
import { AlbumsOfCollector } from "./albumsOfCollector";
import { Collector } from "./collector";
import { CommentDetail } from "./commentDetail";
import { Performer } from "./performer";

export class CollectorDetail extends Collector{
  collectorAlbums:Array<AlbumsOfCollector>;
  favoritePerformers:Array<Performer>;
  comments:Array<CommentDetail>
}
