import React, { useState } from 'react';

export const Test = () => {
  const [isLeaving, setIsLeaving] = useState(false);
  const handler = async () => {
    setIsLeaving(true);
    const response = await fetch('https://api.jikan.moe/v4/anime/1/full');
    const data = await response.json();
    console.log({ data });
    setIsLeaving(false);
  };
  return (
    <div>
      <p>{!isLeaving ? 'hi' : 'bye'}</p>
      <button onClick={handler}>click me</button>
    </div>
  );
};
