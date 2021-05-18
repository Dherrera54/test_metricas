export class AlbumCreation {
  name: string;
  cover: string;
  dateRelease: string;
  description: string;
  recordLabel: string;


  constructor(name: string, cover: string, dateRelease: string, description: string, recordLabel: string) {
    this.name = name;
    this.cover = cover;
    this.dateRelease = dateRelease;
    this.description = description;
    this.recordLabel = recordLabel;
  }
}
