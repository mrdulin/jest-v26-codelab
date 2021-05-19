import { validateName } from './';

describe('67598859', () => {
  it('should pass', () => {
    const callback = jest.fn();
    validateName('name', '.', callback);
    expect(callback).toBeCalledWith('name_validation')
  });

  it('should pass', () => {
    const callback = jest.fn();
    validateName('name', 'a', callback);
    expect(callback).toBeCalledWith()
  });
});
