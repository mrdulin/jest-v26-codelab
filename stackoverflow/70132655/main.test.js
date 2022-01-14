const MyConnection = require('./MyConnection');
const main = require('./main');

jest.mock('./MyConnection', () => {
  console.log('MyConnection module gets mocked');
  const conn = { search: jest.fn() };
  return jest.fn(() => conn);
});
const mConn = MyConnection();

describe('connection tests', () => {
  it('test one', async () => {
    mConn.search.mockImplementation((q) => {
      return `You searched ${q}`;
    });
    const actual = await main('teresa teng');
    expect(actual).toBe('You searched teresa teng');
  });

  it('test two', async () => {
    mConn.search.mockImplementation((q) => {
      return q.length > 32 ? 'a' : 'b';
    });
    const actual = await main('_');
    expect(actual).toBe('b');
  });
});
