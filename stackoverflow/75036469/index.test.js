const { exec } = require('child_process');
const { randomFunc } = require('./');

jest.mock('child_process');

it('test', () => {
  const mStdout = {
    on: jest.fn().mockImplementation(function (event, handler) {
      handler('streaming');
    }),
  };
  exec.mockImplementation(() => ({ stdout: mStdout }));
  randomFunc();
  // expect(mStdout.on).toHaveBeenCalled();
  // or
  expect(exec.mock.results[0].value.stdout.on).toHaveBeenCalled();
});
