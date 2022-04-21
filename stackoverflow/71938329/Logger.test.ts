import { ClientStrategy } from './ClientStrategy';
// import { Logger } from './Logger';

describe('Logger', () => {
  let mockClient;
  let Logger: typeof import('./Logger').Logger;
  beforeEach(async () => {
    mockClient = {
      updateItem: jest.fn(),
    };
    jest.spyOn(ClientStrategy, 'create').mockReturnValue(mockClient);
    Logger = await import('./Logger').then((m) => m.Logger);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should log sth', async () => {
    mockClient.updateItem.mockResolvedValueOnce('fake value');
    const logger = new Logger();
    const response = await logger.logSth('testMsg');
    expect(response).toEqual('fake value');
  });
});
