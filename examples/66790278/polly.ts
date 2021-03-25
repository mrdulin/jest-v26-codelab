import ShopifyService from './shopifyService';

export const pollyWolly = {
  async cons(accessToken, shopName) {
    const shopify = new ShopifyService({ accessToken, shopName });
    const m = await shopify.getCurrentBulkOperation();
    return m;
  },
};
