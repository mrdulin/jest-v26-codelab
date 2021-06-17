import Client from 'ftp';

const c = new Client();

c.on('ready', () => {
  c.list((err, list) => {
    if (err) throw err;
    c.end();
  });
});
c.on('error', () => {
  console.log('handle error');
});
c.connect();
