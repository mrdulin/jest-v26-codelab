import * as faker from 'faker';

jest.mock('faker', () => ({
  lorem: {
    text: jest.fn(),
  },
}));

it('should have called lorem.text() method', () => {
  faker.lorem.text();

  expect(faker.lorem.text).toHaveBeenCalledTimes(1);
});
