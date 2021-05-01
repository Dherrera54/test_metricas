import {Tracks} from './tracks';
import {CommentDetail} from './commentDetail';

export class Albumes {

  id: number;
  name: string;
  cover: string;
  releaseDate: string;
  description: string;
  genre: string;
  recordLabel: string;
  tracks: Array<Tracks>;
  comments: Array<CommentDetail>;


  constructor(id: number, name: string, cover: string, releaseDate: string, description: string, genre: string, recordLabel: string,
              tracks: Array<Tracks>, comments: Array<CommentDetail>) {
    this.id = id;
    this.name = name;
    this.cover = cover;
    this.releaseDate = releaseDate;
    this.description = description;
    this.genre = genre;
    this.recordLabel = recordLabel;
    this.tracks = tracks;
    this.comments = comments;
  }
}
