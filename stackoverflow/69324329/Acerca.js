import React, { useEffect, useState } from 'react';
import { db, onValue, ref } from './Firebase';

const Acerca = () => {
  const [feature, setFeature] = useState();

  useEffect(() => {
    let featureRef = ref(db, 'feature');

    let unsubscribe = onValue(featureRef, (snapshot) => {
      setFeature(snapshot.val().feature);
    });

    return () => unsubscribe();
  }, []);

  return <>{feature ? <h3>{feature.title}</h3> : null}</>;
};

export default Acerca;
