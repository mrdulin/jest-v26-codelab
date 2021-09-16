import 'jest-extended';

describe('69198224', () => {
  test('should pass', () => {
    const auth1 = 'a';
    const auth2 = null;
    const auth3 = 1;
    const auth4 = {};
    const auth5 = undefined;
    const auth6 = [];
    const auth7 = () => {};
    expect(auth1).toBeOneOf([null, expect.anything()]); // pass
    expect(auth2).toBeOneOf([null, expect.anything()]); // pass
    expect(auth3).toBeOneOf([null, expect.anything()]); // pass
    expect(auth4).toBeOneOf([null, expect.anything()]); // pass
    expect(auth6).toBeOneOf([null, expect.anything()]); // pass
    expect(auth7).toBeOneOf([null, expect.anything()]); // pass

    // expect(auth5).toBeOneOf([null, expect.anything()]); // fail
  });
});
