describe('71115363', () => {
  test('should pass', async () => {
    jest.mock('@google-cloud/firestore', () => {
      const mChanges = [{ name: 'fake data' }];
      const mSnapshot = {
        docChanges: jest.fn().mockReturnValue(mChanges),
      };
      return jest.fn(() => ({
        collection: jest.fn().mockReturnThis(),
        onSnapshot: jest.fn().mockImplementation((callback) => {
          callback(mSnapshot);
        }),
      }));
    });

    const StatisticsService = require('./index');

    await StatisticsService();
  });
});
