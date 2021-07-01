import moment from 'moment';

export function main() {
  const date = moment().format();
  console.log('date: ', date);
  const duration = moment.duration(2, 'minutes').humanize();
  console.log('duration: ', duration);
}
