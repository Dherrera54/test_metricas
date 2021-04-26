import {Albumes} from './albumes';
import faker from 'faker';

describe('Creacion del objecto Albumes', () => {
  it('should create an instance', () => {
    expect(new Albumes()).toBeTruthy();
  });
});

describe('Creacion del objecto Albumes with faker', () => {
  it('should create an instance', () => {
    const image = faker.image.imageUrl();
    const albumes = new Albumes(faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(),
      faker.lorem.sentence(), faker.lorem.sentence()
      , faker.lorem.sentence(), image);
    expect(albumes.cover).toEqual(image);
  });
});
