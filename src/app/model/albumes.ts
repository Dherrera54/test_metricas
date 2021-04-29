import {Tracks} from './tracks';

export class Albumes {

  id: number;
  name: string;
  cover: string;
  releaseDate: string;
  description: string;
  genre: string;
  recordLabel: string;
  tracks: Array<Tracks>;

  constructor(id: number, name: string, cover: string, releaseDate: string,
              description: string, genre: string, recordLabel: string, tracks: Array<Tracks>) {
    this.id = id;
    this.name = name;
    this.cover = cover;
    this.releaseDate = releaseDate;
    this.description = description;
    this.genre = genre;
    this.recordLabel = recordLabel;
    this.tracks = tracks;
  }
}
