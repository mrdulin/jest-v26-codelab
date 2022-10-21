const { getConfig } = require('./modules/config/configManager');
const BridgeDataProvider = require('./modules/storage/bridge/bridgeDataProvider');
const ClientProcessor = require('./modules/domain/clientProcessor');
const configPromise = getConfig();

exports.handler = async () => {

  const config = await configPromise;
  if (!config.enabled) {
    return;
  }

  const bridgeDataProvider = new BridgeDataProvider(config.bridgeDynamoDbConfig);
  const clientProcessor = new ClientProcessor(config);

  const clients = await bridgeDataProvider.getActiveClients();

  for (const client of clients) {
    await clientProcessor.process(client);
  }
};