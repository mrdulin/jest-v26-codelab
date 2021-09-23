const fs = require('fs');
fs.readFileSync.mockReturnValue('randomPrivateKey');
const secretConfig = require('./secret');

jest.mock('fs');

describe('secret read files', () => {
  it('should read secret from file', async () => {
    const secretMessage = secretConfig.kafka_keystore_password;
    expect(secretMessage).toEqual('randomPrivateKey');
  });
});
