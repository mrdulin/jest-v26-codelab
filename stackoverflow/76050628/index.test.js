import { promisify } from 'util';
import assert from 'assert';

const foo = (str, callback) => {
  console.log('>>>>>>>>>>>>>>>>>>>>>===>>>>', str);
  return callback(null, 'foo' + str);
};
const fooProm = (str) =>
  new Promise((res) => {
    foo(str, (err, value) => {
      res(value);
    });
  });

(async function test() {
  const barProm = await fooProm('Seed');
  assert(barProm === 'fooSeed', 'barProm assertion');

  const fooProm2 = promisify(foo);
  let barProm2 = await fooProm2('Seed');
  assert(barProm2 === 'fooSeed', 'barProm2 assertion');
})();
