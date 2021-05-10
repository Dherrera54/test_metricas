import { Albumes } from "./albumes";
import { Collector } from "./collector";
import { CommentDetail } from "./commentDetail";
import { Performer } from "./performer";
import{CollectorAlbums} from "./collectorAlbums"

export class CollectorDetail extends Collector{
  collectorAlbums:Array<CollectorAlbums>;
  favoritePerformers:Array<Performer>;
  comments:Array<CommentDetail>
}
