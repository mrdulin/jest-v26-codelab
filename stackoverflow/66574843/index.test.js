import { main } from './';

describe('66574843', () => {
  it('should pass', () => {
    const dataObj = {
      send: jest.fn(),
    };

    Object.defineProperty(window, 'dataObj', {
      value: dataObj,
    });

    main({ name: 'teresa' });
    expect(dataObj.send).toBeCalledWith('teresa', 'ldo');
  });
});
