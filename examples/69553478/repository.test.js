const records = {
  findAll: jest.fn(),
};
jest.mock('./init-models', () => {
  return jest.fn(() => ({ records }));
});

describe('69553478', () => {
  let repository;
  beforeEach(() => {
    repository = require('./repository');
  });
  test('should return correct number of records', async () => {
    records.findAll.mockResolvedValue([1, 2, 3]);
    const actual = await repository.fetchRecords();
    expect(actual.length).toStrictEqual(3);
  });
  test('should throw error', async () => {
    records.findAll.mockRejectedValue(new Error('network'));
    await expect(repository.fetchRecords()).rejects.toThrow('network');
  });
});
