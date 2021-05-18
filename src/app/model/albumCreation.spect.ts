import {Albumes} from './albumes';
import faker from 'faker';
import {Tracks} from './tracks';
import {CommentDetail} from './commentDetail';
import {AlbumCreation} from './albumCreation';

describe('Creacion del objecto Albumes', () => {
  it('should create an instance', () => {
    expect(new AlbumCreation(
      faker.random.number({min: 0, max: 3}),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.date.past(),
      faker.lorem.sentence()
    )).toBeTruthy();
  });
});

describe('Creacion del objecto Albumes with faker', () => {
  it('should create an instance', () => {
    const record =   faker.date.past();
    const  albumCreation = new AlbumCreation(
      faker.random.number({min: 0, max: 3}),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.date.past(),
      faker.lorem.sentence()
    );
    expect(albumCreation.dateRelease).toEqual(record);
  });
});
