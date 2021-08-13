describe('68770432', () => {
  test('should pass', () => {
    const spyFn = jest.fn();
    spyFn({
      actions: [{ handler: () => {}, id: 'exclude-account', isInactive: false, label: 'Exclude' }],
    });
    expect(spyFn).toBeCalledWith({
      actions: [
        expect.objectContaining({
          id: 'exclude-account',
        }),
      ],
    });
  });
});
