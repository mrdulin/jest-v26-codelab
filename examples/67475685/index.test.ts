import zlib from 'zlib';
import { unzipObjectContent } from './';
import { mocked } from 'ts-jest/utils';

jest.mock('zlib');

const mzlib = mocked(zlib);

describe('67475685', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should pass', async () => {
    const problemZipContent = Buffer.from(JSON.stringify({ name: 'teresa teng' }));
    mzlib.gunzip.mockImplementationOnce((buffer, callback: any) => {
      callback(null, problemZipContent);
    });
    const actual = await unzipObjectContent(problemZipContent);
    expect(actual).toEqual('{"name":"teresa teng"}');
    expect(mzlib.gunzip).toBeCalledTimes(1);
  });
});
