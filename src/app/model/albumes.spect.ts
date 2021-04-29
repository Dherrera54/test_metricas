import {Albumes} from './albumes';
import faker from 'faker';
import {Tracks} from './tracks';
import {CommentDetail} from './commentDetail';

describe('Creacion del objecto Albumes', () => {
  it('should create an instance', () => {
    expect(new Albumes(
      faker.random.number({min: 0, max: 3}),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.date.past(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      new Array<Tracks>(),
      new Array<CommentDetail>()
    )).toBeTruthy();
  });
});

describe('Creacion del objecto Albumes with faker', () => {
  it('should create an instance', () => {
    const record =   faker.date.past();
    const albumes = new Albumes(
      faker.random.number({min: 0, max: 3}),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      record,
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      new Array<Tracks>(),
      new Array<CommentDetail>()
    );
    expect(albumes.releaseDate).toEqual(record);
  });
});
