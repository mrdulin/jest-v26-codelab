import { checkUp } from './';
import { secondCheckStatus } from './utils';
import { mocked } from 'ts-jest/utils';

jest.mock('./utils', () => ({
  ...(jest.requireActual('./utils') as object),
  secondCheckStatus: jest.fn(),
}));

const mockSecondCheckStatus = mocked(secondCheckStatus);

describe('69720608', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('should pass', async () => {
    const mockApp = {
      quit: jest.fn(),
    };
    const mockHeart = {
      createEvent: jest.fn().mockImplementation(async (beats, options, callback) => {
        await callback();
      }),
    };
    await checkUp(mockApp, mockHeart, 1, 1);
    expect(mockSecondCheckStatus).toBeCalledTimes(1);
    expect(mockApp.quit).toBeCalledTimes(1);
  });
});
