import main from './';
import someFn from './some-module';

jest.mock('./some-module');

describe('71219584', () => {
  test('should pass 1', () => {
    someFn.mockReturnValue('fake a');
    console.log(main());
  });
  test('should pass 2', () => {
    someFn.mockReturnValue('fake b');
    console.log(main());
  });
});
