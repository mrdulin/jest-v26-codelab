import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import stream from 'stream';
import fs from 'fs';

const mock = new MockAdapter(axios);

describe('75315448', () => {
  test('should pass', async () => {
    const mockStream = new stream.PassThrough();
    mock.onGet('/api/download').reply(200, mockStream);
    const streamFinishedSpy = jest.spyOn(stream, 'finished');
    const mockWritableStream = fs.createWriteStream(Buffer.from('test'));
    jest.spyOn(fs, 'createWriteStream').mockImplementation(() => mockWritableStream);
    const { download } = await import('.');
    await download();
    mockStream.emit('end');
    mockWritableStream.emit('finish');
    expect(streamFinishedSpy).toBeCalledWith(mockStream, expect.any(Function));
  });
});
