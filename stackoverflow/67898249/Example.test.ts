import { nanoid } from 'nanoid';
import { Example, ApplicationDto } from './Example';
import { mocked } from 'ts-jest/utils';

jest.mock('nanoid');

const mnanoid = mocked(nanoid);

describe('67898249', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should pass', async () => {
    mnanoid.mockReturnValueOnce('mock id');
    const mockAppDto: ApplicationDto = { email: '123@mock.com' };
    const mockApplicationModel = { create: jest.fn().mockReturnValueOnce({ id: 1 }) };
    const example = new Example(mockApplicationModel);
    const actual = await example.createApp(mockAppDto);
    expect(actual).toEqual(1);
    expect(mockApplicationModel.create).toBeCalledWith({ email: '123@mock.com', accessToken: 'mock id' });
  });
});
