// https://github.com/jsdom/whatwg-url/issues/209
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

jest.setTimeout(5 * 1000);

// global.SVGRect = {};

// jest.useFakeTimers('modern');
// jest.setSystemTime(new Date('2021-01-01T09:00:00.000Z'));

// jest.mock('./stackoverflow/73129547/something', () => ({
//   someMethod: jest.fn().mockReturnValue(0),
// }));
