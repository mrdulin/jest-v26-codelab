const { getConfig } = require('./modules/config/configManager');
const BridgeDataProvider = require('./modules/storage/bridge/bridgeDataProvider');
const ClientProcessor = require('./modules/domain/clientProcessor');

jest.mock('./modules/config/configManager');
jest.mock('./modules/storage/bridge/bridgeDataProvider');
jest.mock('./modules/domain/clientProcessor');

describe('index', () => {
  test('should pass', async () => {
    getConfig.mockResolvedValueOnce({ enabled: true, bridgeDynamoDbConfig: 'fake bridge dynamoDB config' })
    const bridgeDataProviderInstance = {
      getActiveClients: jest.fn().mockResolvedValueOnce([1, 2])
    }
    BridgeDataProvider.mockImplementation(() => bridgeDataProviderInstance);

    const clientProcessorInstance = {
      process: jest.fn()
    }
    ClientProcessor.mockImplementation(() => clientProcessorInstance)

    const { handler } = require('./');
    await handler();
    expect(getConfig).toBeCalledTimes(1);
    expect(BridgeDataProvider).toBeCalledWith('fake bridge dynamoDB config');
    expect(bridgeDataProviderInstance.getActiveClients).toBeCalledTimes(1);
    expect(clientProcessorInstance.process.mock.calls).toEqual([[1], [2]])
  })
})