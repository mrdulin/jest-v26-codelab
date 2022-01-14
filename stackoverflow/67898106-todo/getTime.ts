import dayjs from 'dayjs';

export { dayjs };
export function getTime(dateTime: string) {
  return dayjs(dateTime).format('HH:mm');
}
