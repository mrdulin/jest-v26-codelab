const cp = require('child_process');
const path = require('path');

test('script', (done) => {
  const script = cp.exec(path.resolve(__dirname, './foo.sh'));
  script.stdout.on('data', (data) => {
    console.log('stdout: ' + data);
    done();
  });
  script.stderr.on('data', (data) => {
    console.error('stderr: ' + data);
    done();
  });
});
