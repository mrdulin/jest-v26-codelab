const { read } = require('./callback');
const fs = require('fs');

describe('callback testing', () => {
  test('callback is called', () => {
    const mockCallback = jest.fn();
    const mockData = 'mock file data';
    const mockReadFile = jest.spyOn(fs, 'readFile').mockImplementationOnce((filename, options, callback) => {
      callback(null, mockData);
    });
    read('./test', mockCallback);
    expect(mockCallback).toHaveBeenCalled();
    expect(mockReadFile).toBeCalledWith(expect.any(String), { encoding: 'utf-8' }, mockCallback);
    mockReadFile.mockRestore();
  });
});
