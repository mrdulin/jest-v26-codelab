import { decode } from './decode';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';

describe('66966317', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should decode value', async () => {
    const decodedvalue = { name: 'teresa teng' };
    const verifySpy = jest.spyOn(jwt, 'verify').mockImplementationOnce((token, getPublicKey, options, callback) => {
      callback!(null, decodedvalue);
    });
    const actual = await decode('teresa teng', true);
    expect(actual).toEqual({ name: 'teresa teng' });
    expect(verifySpy).toBeCalledWith(
      'teresa teng',
      true as any,
      { algorithms: ['RS256'], ignoreExpiration: false },
      expect.any(Function)
    );
  });

  it('should handle decode error', async () => {
    const decodedError = new JsonWebTokenError('network');
    const verifySpy = jest.spyOn(jwt, 'verify').mockImplementationOnce((token, getPublicKey, options, callback) => {
      callback!(decodedError, undefined);
    });
    const actual = await decode('teresa teng', true);
    expect(actual).toBeNull();
    expect(verifySpy).toBeCalledWith(
      'teresa teng',
      true as any,
      { algorithms: ['RS256'], ignoreExpiration: false },
      expect.any(Function)
    );
  });
});
