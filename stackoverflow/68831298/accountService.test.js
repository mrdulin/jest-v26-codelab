const { createAccount } = require('./accountService');

const accountDocument = {
  save: jest.fn(),
  findOne: jest.fn(),
  find: jest.fn(),
};

jest.mock('./account', () => ({
  Account: jest.fn(() => accountDocument),
}));

describe('Test function', () => {
  it('Run create account function', async () => {
    await createAccount({ user_id: 1 });
    expect(accountDocument.save).toBeCalledTimes(1);
  });
});
