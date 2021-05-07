import React, { useState, useEffect } from 'react';
import PubSub from 'pubsub-js';

export const App = () => {
  const [data, setData] = useState('a');

  const mySub = (msg, pubData) => {
    setData(pubData);
  };

  useEffect(() => {
    const token = PubSub.subscribe('TOPIC', mySub);

    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  return <div>{data}</div>;
};
