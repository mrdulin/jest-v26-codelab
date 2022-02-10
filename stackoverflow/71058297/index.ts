import { Firestore } from '@google-cloud/firestore';

export async function main() {
  const Database = new Firestore();
  await Database.collection('products')
    .select('published')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        if (doc.data().published) {
          console.log(doc.data());
        }
      });
      console.log(snapshot.docs.length);
      console.log(snapshot.size);
    });
}
