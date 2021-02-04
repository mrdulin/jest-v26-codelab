import { main } from './';
import { mocked } from 'ts-jest/utils';
import Custom from './customClass';

jest.mock('./customClass', () => jest.fn().mockImplementation(() => 'mocked custom class'));
const CustomMocked = mocked(Custom);

describe('HtmlWebpackPlugin', () => {
  it('should pass', () => {
    const actual = main();
    expect(actual).toBeInstanceOf(Custom);
    expect(actual).toEqual('mocked custom class');
    expect(CustomMocked).toBeCalledTimes(1);
  });
});
