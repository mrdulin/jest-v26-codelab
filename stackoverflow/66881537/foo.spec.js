const foo = require('./foo');

jest.mock('knex', () => jest.fn(() => ({ a: 4 })));

describe('jest.mockImplementation', () => {
  it('should mock knex', async () => {
    await foo.func();
  });
});
