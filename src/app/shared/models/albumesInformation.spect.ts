import faker from 'faker';
import {AlbumesInformation} from './albumesInformation';

describe('Creacion del objecto Albumes', () => {
  it('should create an instance', () => {
    expect(new AlbumesInformation(faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(),
      faker.lorem.sentence())).toBeTruthy();
  });
});

describe('Creacion del objecto Albumes with faker in shared', () => {
  it('should create an instance', () => {
    const image = faker.image.imageUrl();
    const albumes = new AlbumesInformation(faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(),
      image);
    expect(albumes.image).toEqual(image);
  });
});
