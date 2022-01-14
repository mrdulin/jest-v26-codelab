import { main } from './';

describe('', () => {
  it('should ', () => {
    window.paypal = {
      Buttons: jest.fn().mockReturnThis(),
      render: jest.fn(),
    };
    main();
    expect(window.paypal.Buttons).toBeCalledTimes(1);
    expect(window.paypal.render).toBeCalledTimes(1);
  });
});
