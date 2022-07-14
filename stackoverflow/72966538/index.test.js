import { ClientSecretCredential } from '@azure/identity';

jest.mock('@azure/identity', () => {
  return {
    ClientSecretCredential: jest.fn().mockImplementation(() => {
      throw new Error('Invalid tenant id is provided');
    }),
  };
});

describe('ClientSecretCredential described', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Azure identity', () => {
    it('Should throw an error on incorrectly provided tenantId, clientId or clientSecret', () => {
      expect(() => new ClientSecretCredential('some id', 'some id', 'some id')).toThrowError(
        'Invalid tenant id is provided'
      );
    });
  });
});
