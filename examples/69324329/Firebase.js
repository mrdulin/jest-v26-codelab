export function onValue(ref, callback) {
  const snapshot = {
    val() {
      return 'real implementation';
    },
  };
  callback(snapshot);
  return function unsubscribe() {};
}

export function ref(db, name) {
  return {};
}

export const db = {};
