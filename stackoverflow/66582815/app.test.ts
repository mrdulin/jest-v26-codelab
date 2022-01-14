import { app } from './app';
import request from 'supertest';
import * as ItemService from './ItemService';
import { mocked } from 'ts-jest/utils';

jest.mock('./ItemService');

const mItemService = mocked(ItemService);

describe('66582815', () => {
  it('should get status code 500 and an error message', (done) => {
    const mError = new Error('network');
    mItemService.findAll.mockRejectedValueOnce(mError);
    request(app)
      .get('/')
      .expect(500)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).toBe('network');
        done();
      });
  });
});
