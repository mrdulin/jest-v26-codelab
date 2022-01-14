const TEST_SETTINGS = { c: 3 };

jest.mock('./settings', () => {
  return {
    test: TEST_SETTINGS,
  };
});

test('getSetting', async () => {
  const { getSetting } = await import('./getSetting');
  expect(getSetting('test')).toEqual(TEST_SETTINGS);
});
