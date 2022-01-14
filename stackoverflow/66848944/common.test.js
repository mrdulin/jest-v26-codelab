import { Common } from './common';
import { MongoClient } from 'mongodb';

describe('66848944', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  describe('#getCollection', () => {
    it('To check if the collection method on the MongoClient instance was invoked', async () => {
      const client = { db: jest.fn().mockReturnThis(), collection: jest.fn() };
      const connectSpy = jest.spyOn(Common, 'connect').mockResolvedValueOnce(client);
      await Common.getCollection({ url: 'mongodb://localhost:27017', db_name: 'awesome', collection_name: 'products' });
      expect(connectSpy).toBeCalledWith('mongodb://localhost:27017');
      expect(client.db).toBeCalledWith('awesome');
      expect(client.collection).toBeCalledWith('products');
    });
  });

  describe('#connect', () => {
    it('should connect to mongo db', async () => {
      const connectSpy = jest.spyOn(MongoClient, 'connect').mockReturnValueOnce({});
      const actual = await Common.connect('mongodb://localhost:27017');
      expect(actual).toEqual({});
      expect(connectSpy).toBeCalledWith('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    });
  });
});
