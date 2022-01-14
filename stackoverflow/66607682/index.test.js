import DocumentStore from './index';
import axios from 'axios';

const TEST_PAGES = [
  {
    url: 'URL1',
  },
  {
    url: 'URL2',
  },
  {
    url: 'URL3',
  },
];

const FETCH_PAGES_MOCK = {
  data: {
    urls: TEST_PAGES,
  },
};

jest.mock('axios');

describe('DocumentStore', () => {
  describe('getPages', () => {
    axios.get.mockResolvedValue(FETCH_PAGES_MOCK);
    it('fetches pages', async () => {
      const store = new DocumentStore();
      expect(store.pages.length).toEqual(0);
      await store.getPages('test');
      expect(store.pages.length).toEqual(3);
      expect(axios.get).toBeCalled();
    });
  });
});
