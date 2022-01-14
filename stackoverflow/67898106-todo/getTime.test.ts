import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { dayjs } from './getTime';

dayjs.extend(utc);
dayjs.extend(timezone);

describe('Function getTime', () => {
  beforeEach(() => {
    dayjs.tz.setDefault('Europe/Moscow');
  });

  afterEach(() => {
    dayjs.tz.setDefault();
  });

  it('should return time in format hh:mm', () => {
    const dateTime = '2021-06-07T07:28:55.69725+00:00';
    const { getTime } = require('./getTime');
    expect(getTime(dateTime)).toEqual('10:28');
  });
});
