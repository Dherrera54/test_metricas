import faker from 'faker';
import {Tracks} from './tracks';

describe('Creacion del objecto tracks', () => {
  it('should create an instance', () => {
    expect(new Tracks(faker.random.number({min: 0, max: 3}), faker.lorem.sentence(), faker.lorem.sentence())).toBeTruthy();
  });
});

describe('Creacion del objecto tracks with faker', () => {
  it('should create an instance', () => {
    const id = faker.random.number({min: 0, max: 3});
    const tracks = new Tracks(id, faker.lorem.sentence(), faker.lorem.sentence());
    expect(tracks.id).toEqual(id);
  });
});
