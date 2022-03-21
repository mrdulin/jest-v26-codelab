function main() {
  return typeof SVGRect === 'undefined';
}

describe('SVGRect', () => {
  test('SVGRect is undefined', () => {
    expect(main()).toBeTruthy();
  });

  test('SVGRect is not undefined', () => {
    (global as any).SVGRect = {};
    expect(main()).toBeFalsy();
  });
});
