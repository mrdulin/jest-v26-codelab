import axios from 'axios';
import { fetchRate } from '.';

describe('75534184', () => {
  test('If incorrect symbol is passed the function throws an error', async () => {
    const e = {
      response: {
        data: {
          error: "We didn't find your currency",
        },
        status: 550,
      },
    };
    jest.spyOn(axios, 'get').mockRejectedValueOnce(e);
    await expect(fetchRate()).rejects.toEqual("We didn't find your currency");
  });
});
