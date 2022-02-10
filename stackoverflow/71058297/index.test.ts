describe('71058297', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  test('should pass', async () => {
    const mDocument1 = { data: jest.fn(() => ({ published: true, name: 'steam deck' })) };
    const mQuerySnapshot: any = [mDocument1];
    mQuerySnapshot.docs = mQuerySnapshot;
    mQuerySnapshot.size = mQuerySnapshot.docs.length;
    const mFirestore = {
      collection: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      get: jest.fn().mockResolvedValueOnce(mQuerySnapshot),
    };
    const MockFireStore = jest.fn(() => mFirestore);
    jest.doMock('@google-cloud/firestore', () => ({ Firestore: MockFireStore }));
    const { main } = require('./');
    await main();
    expect(MockFireStore).toBeCalledTimes(1);
    expect(mFirestore.collection).toBeCalledWith('products');
    expect(mFirestore.select).toBeCalledWith('published');
    expect(mFirestore.get).toBeCalledTimes(1);
    expect(mDocument1.data).toBeCalledTimes(2);
  });
});
