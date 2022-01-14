import device from './device';
import { getFontSize } from './dependancy';

jest.mock('./dependancy');

it('should memoize the font size', () => {
  getFontSize.mockReturnValue(16);
  device.doSomething();
  device.doSomething();
  device.doSomething();
  expect(getFontSize).toBeCalledTimes(1);
});
