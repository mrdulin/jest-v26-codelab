import A from './a';

jest.mock('./b', () => {
  return jest.fn().mockImplementation(() => {
    return {
      bye: () => {
        return null;
      },
    };
  });
});

describe('Test A Hello', () => {
  const a = new A();

  test('Get Token-Negative', () => {
    a.hello();
  });
});
