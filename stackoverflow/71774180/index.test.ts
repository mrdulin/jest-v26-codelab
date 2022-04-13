import { t } from 'i18next';
import { changeDocumentTitle } from './utils';

jest.mock('i18next');

const tMock = (key: string): string => key;

beforeAll(() => {
  (t as jest.Mock).mockImplementation(tMock);
});

test('test changeDocumentTitle function', () => {
  changeDocumentTitle('string');
  expect(document.title).toEqual(tMock('string'));
});
