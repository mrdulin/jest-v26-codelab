import Shopify from 'shopify-api-node';

const SHOPIFY_API_VERSION = '';
const bulkOperationStatusQuery = ``;

interface ICurrentBulkOperation {}

export default class ShopifyService {
  private readonly shopify: Shopify;

  constructor(config: Shopify.IPublicShopifyConfig | Shopify.IPrivateShopifyConfig) {
    this.shopify = new Shopify({ ...config, apiVersion: SHOPIFY_API_VERSION });
  }

  public async getCurrentBulkOperation(): Promise<ICurrentBulkOperation | undefined> {
    const response = await this.shopify.graphql(bulkOperationStatusQuery);
    return response?.currentBulkOperation;
  }
}
