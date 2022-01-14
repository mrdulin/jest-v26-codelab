import ReadFile from './ReadFile';
import fs from 'fs';

jest.mock('fs');

describe('67216891', () => {
  const readFile = new ReadFile();

  it('should store', () => {
    const mReadStream = {
      pipe: jest.fn().mockReturnThis(),
      on: jest.fn().mockImplementation(function (event, handler) {
        handler();
        return this;
      }),
    };
    fs.createReadStream.mockReturnValueOnce(mReadStream);
    readFile.csvFileReader();
    expect(fs.createReadStream).toBeCalledTimes(1);
    expect(mReadStream.pipe).toBeCalledTimes(1);
    expect(mReadStream.on).toBeCalledWith('data', expect.any(Function));
    expect(mReadStream.on).toBeCalledWith('end', expect.any(Function));
  });
});
