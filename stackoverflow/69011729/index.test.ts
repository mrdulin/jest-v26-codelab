import { main } from './';
import DBManager from './dbManager';
import { Db } from 'mongodb';

describe('69011729', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should pass', async () => {
    const mDB = ({
      collection: jest.fn(),
    } as unknown) as Db;
    jest.spyOn(DBManager.prototype, 'start').mockResolvedValue();
    jest.spyOn(DBManager.prototype, 'db', 'get').mockReturnValueOnce(mDB);
    await main();
    expect(DBManager.prototype.start).toBeCalledTimes(1);
    expect(mDB.collection).toBeCalledWith('user');
  });

  test('should restore original methods', () => {
    expect(jest.isMockFunction(DBManager.prototype.start)).toBeFalsy();
  });
});
