import faker from 'faker';
import {Card} from './card';

describe('Creacion del objecto Albumes', () => {
  it('should create an instance', () => {
    expect(new Card(faker.random.number({min: 0, max: 3}) ,
      faker.lorem.sentence(), faker.lorem.sentence(),
      faker.lorem.sentence(), faker.lorem.sentence(),
      faker.lorem.sentence())).toBeTruthy();
  });
});

describe('Creacion del objecto Albumes with faker in shared', () => {
  it('should create an instance', () => {
    const image = faker.image.imageUrl();
    const albumes = new Card(
      faker.random.number({min: 0, max: 3}),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      image);
    expect(albumes.image).toEqual(image);
  });
});
