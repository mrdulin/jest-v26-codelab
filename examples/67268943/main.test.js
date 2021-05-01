import { main } from './main';
import { Firestore } from '@google-cloud/firestore';

jest.mock('@google-cloud/firestore');

describe('67268943', () => {
  it('should pass', async () => {
    Firestore.FieldValue.serverTimestamp.mockReturnValueOnce(2021);
    expect(Firestore).toBeCalledTimes(1);
    await main();
    const firestore = new Firestore();
    expect(firestore.collection).toBeCalledWith('foo');
    expect(firestore.doc).toBeCalledWith('bar');
    expect(firestore.set).toBeCalledWith(
      {
        foo: 'baz',
        updated: 2021,
      },
      { merge: true }
    );
  });
});
