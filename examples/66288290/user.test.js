const { isMinor } = require('./user');
const { getAge } = require('./age');

jest.mock('./age', () => ({
  getAge: jest.fn(() => 99),
}));

describe('Age Test', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  test('should be an adult', async () => {
    const actual = await isMinor();
    expect(actual).toBeFalsy();
    expect(getAge).toBeCalledWith(1991);
  });
});

// describe('Age Test', () => {
//   beforeEach(() => {
//     jest.mock('./age', () => ({
//       getAge: jest.fn(() => 99),
//     }));
//   });

//   test('should be an adult', async () => {
//     const { isMinor } = require('./user');
//     const { getAge } = require('./age');
//     const actual = await isMinor();
//     expect(actual).toBeFalsy();
//     expect(getAge).toBeCalledWith(1991);
//   });
// });
