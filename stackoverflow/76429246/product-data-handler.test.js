import { DataHandler } from './product-handlers/data-handler'
import { ProductDatatHandler } from './product-data-handler'

jest.mock('./product-handlers/data-handler');

describe('76429246', () => {
  test('should pass', async () => {
    const dataHandlerInstanceMock = {
      insert: jest.fn()
    }
    DataHandler.mockImplementation(() => dataHandlerInstanceMock);

    const lookUpServiceMock = {
      getProductHandlerForType: jest.fn()
    }
    const productDataHandler = new ProductDatatHandler();
    await productDataHandler.process({ type: 'a', value: 'b' }, lookUpServiceMock);
    expect(lookUpServiceMock.getProductHandlerForType).toHaveBeenCalledWith('a');
    expect(dataHandlerInstanceMock.insert).toHaveBeenCalledWith({ type: 'a', value: 'b' });
  });
});