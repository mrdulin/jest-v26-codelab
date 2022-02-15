const Firestore = require('@google-cloud/firestore');
const Database = new Firestore();

async function StatisticsService() {
  const collections = ['products', 'users', 'orders'];
  collections.forEach((collection) => {
    Database.collection(collection).onSnapshot(
      (snapshot) => {
        // console.log('🔥🔥🔥', snapshot);
        snapshot.docChanges().forEach((change) => {
          console.log(change);
        });
      },
      (error) => {
        console.error(error);
      }
    );
  });
}

module.exports = StatisticsService;
