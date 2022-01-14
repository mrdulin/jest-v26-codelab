import { main } from '.';
import moment from 'moment';

jest.mock('moment', () => {
  const oMoment = jest.requireActual('moment');
  const mm = {
    format: jest.fn(),
  };
  const mMoment = jest.fn(() => mm);
  for (let prop in oMoment) {
    mMoment[prop] = oMoment[prop];
  }
  return mMoment;
});

describe('68209029', () => {
  it('should pass', () => {
    moment().format.mockReturnValueOnce('2021-01-01T00:00:00.000Z');
    main();
  });
});
