const PresetDropdown = require('./presetDropdown');

describe('71164955', () => {
  test('should handle data', async () => {
    const mockApi = {
      getMany: jest.fn().mockResolvedValueOnce('fake data'),
    };
    const instance = new PresetDropdown(mockApi, '1');
    await instance.get();
    expect(instance.isError).toBeFalsy();
  });

  test('should handle error', async () => {
    const mockError = new Error('fake error');
    const mockApi = {
      getMany: jest.fn().mockRejectedValueOnce(mockError),
    };
    const instance = new PresetDropdown(mockApi, '1');
    await instance.get();
    expect(instance.isError).toBeTruthy();
  });
});
