import Container from './';

jest.mock('./', () => {
  return { helper: jest.fn() };
});

const { repository, helper } = Container as jest.MockedClass<typeof Container>;

describe('73222806', () => {
  test('should pass', () => {
    // console.log(repository, helper);
  });
});
