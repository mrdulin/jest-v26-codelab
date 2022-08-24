import fs from 'fs';
import { logToTransport } from '.';

jest.mock('fs', () => ({
  ...(jest.requireActual('fs') as typeof fs),
  appendFileSync: jest.fn(),
}));
describe('73466276', () => {
  test('should pass', () => {
    expect(jest.isMockFunction(fs.appendFileSync)).toBeTruthy();
    expect(jest.isMockFunction(fs.appendFile)).toBeFalsy();
    logToTransport({ level: 'debug', payload: { name: 'teresa teng' } });
    expect(fs.appendFileSync).toBeCalledWith(
      'monopoly_deal.log',
      JSON.stringify({ level: 'debug', payload: { name: 'teresa teng' } }) + '\n'
    );
  });
});
