import faker from 'faker';
import {Header} from './header';

describe('Creacion del objecto Header', () => {
  it('should create an instance', () => {
    expect(new Header(faker.random.number({min: 0, max: 3}), faker.lorem.sentence(), true)).toBeTruthy();
  });
});

describe('Creacion del objecto Header with faker in Header', () => {
  it('should create an instance', () => {
    const index = faker.random.number({min: 0, max: 3});
    const state = faker.random.boolean();
    const header = new Header(faker.random.number({min: 0, max: 3}), faker.lorem.sentence(), state);
    expect(header.index).toEqual(index);
    expect(header.enabled).toEqual(state);
  });
});


