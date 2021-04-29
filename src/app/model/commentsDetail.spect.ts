import faker from 'faker';
import {CommentDetail} from './commentDetail';

describe('Creacion del objecto CommentDetail', () => {
  it('should create an instance', () => {
    expect(new CommentDetail(faker.random.number({min: 0, max: 3}),  faker.lorem.sentence(),
      faker.random.number({min: 0, max: 3}))).toBeTruthy();
  });
});

describe('Creacion del objecto CommentDetail with faker', () => {
  it('should create an instance', () => {
    const rating = faker.random.number({min: 0, max: 3});
    const comment = new CommentDetail(rating,  faker.lorem.sentence(),
      faker.random.number({min: 0, max: 3}));
    expect(comment.rating).toEqual(rating);
  });
});
