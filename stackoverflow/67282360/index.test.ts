import { testFunc } from './';

describe('check validity', () => {
  test.each`
    func        | parameter    | expected
    ${testFunc} | ${''}        | ${null}
    ${testFunc} | ${undefined} | ${null}
    ${testFunc} | ${null}      | ${null}
    ${testFunc} | ${0}         | ${null}
  `('returns $expected when parameter is $parameter', ({ func, parameter, expected }) => {
    expect(func(parameter)).toBe(expected);
  });
});
