import logger, { Request } from './';
import Analytics from 'analytics-node';

jest.mock('analytics-node');
const mockAnalytics = Analytics as jest.MockedClass<typeof Analytics>;

describe('Logger tests', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it(`Should call analytics.track`, () => {
    const WRITE_KEY = process.env.WRITE_KEY;
    process.env.WRITE_KEY = 'test key';
    const request: Request = {
      userId: 23,
    };
    logger(request);
    expect(mockAnalytics).toBeCalledWith('test key');
    expect(mockAnalytics.mock.instances[0].track).toHaveBeenCalled();
    process.env.WRITE_KEY = WRITE_KEY;
  });
});
