import { Firestore } from '@google-cloud/firestore';
const firestore = new Firestore();

const main = async () => {
  await firestore.collection('foo').doc('bar').set(
    {
      foo: 'baz',
      updated: Firestore.FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
};

export { main };
