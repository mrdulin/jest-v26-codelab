import { main } from './main';
import DBManager from './dbManager';
import { Db, MongoClient } from 'mongodb';

describe('68888424', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should pass', async () => {
    const mockDbInstance = ({
      collection: jest.fn(),
    } as unknown) as Db;
    const mockDb = jest.fn(() => mockDbInstance);
    jest.spyOn(DBManager, 'start').mockResolvedValueOnce();
    jest.spyOn(DBManager, 'connection', 'get').mockReturnValue(({ db: mockDb } as unknown) as MongoClient);
    await main();
    expect(DBManager.start).toBeCalledTimes(1);
    expect(DBManager.connection!.db).toBeCalledTimes(1);
    expect(mockDbInstance.collection).toBeCalledWith('users');
  });
});
