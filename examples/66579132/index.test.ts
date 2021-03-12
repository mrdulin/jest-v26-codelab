import { downloadAttachment } from './';
import axios from 'axios';

describe('66579132', () => {
  it('should transform response', async () => {
    const mRes = {};
    let transformResponse;
    jest.spyOn(axios, 'get').mockImplementationOnce((url, options) => {
      transformResponse = options!.transformResponse![0];
      return Promise.resolve(mRes);
    });
    await downloadAttachment({ attachmentId: 1, id: 1, oId: 1 });
    expect(axios.get).toBeCalled();

    // test tranfromResponse
    const response = transformResponse('teresa teng');
    expect(response).toEqual({ file: 'teresa teng' });
  });
});
