import { DataHandler } from './product-handlers/data-handler';

class ProductDatatHandler {
  async process(data, service) {
    if (data.value) {
      try {
        const processor = await service.getProductHandlerForType(data.type);
        const dataHandler = new DataHandler(processor);
        await dataHandler.insert(data);
      } catch (error) {
        console.error('Failed to persist data ', error);
      }
    }
  }
}

export { ProductDatatHandler };
