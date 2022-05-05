const { writeData } = require('.');

jest.mock('fs', () => ({
  promises: {
    writeFile: jest.fn(),
  },
}));

describe('Write file', () => {
  it('should write a file', async () => {
    const result = await writeData('test data', 'test-file');
    expect(result).toEqual('test-file written');
  });
});
