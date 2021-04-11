describe('67041178', () => {
  beforeAll(() => {
    window.app = {
      initialAppProps: {
        exp: { my_feature: false },
      },
    };
  });
  beforeEach(() => {
    jest.resetModules();
  });
  it('should enable', () => {
    window.app.initialAppProps.exp.my_feature = true;
    const { feature } = require('./');
    expect(feature).toEqual(['exp is enabled']);
  });

  it('should disable', () => {
    window.app.initialAppProps.exp.my_feature = false;
    const { feature } = require('./');
    expect(feature).toEqual(['exp is disable']);
  });
});
