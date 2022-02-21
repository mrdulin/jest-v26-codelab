import React from 'react';
import { useEffect, useState } from 'react';

export function Message({ message }: any) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const CTATimer = setTimeout(() => {
      setShowMessage(true);
    }, 1500);
    return () => {
      clearTimeout(CTATimer);
    };
  }, []);

  if (!showMessage) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>{message.text}</div>
    </>
  );
}
