import React, { useState } from 'react';

export const MyComponent = () => {
  const [nickname, setNickname] = useState('');

  const setNicknameHandler = (value: string) => {
    if (value.length > 5) {
      return;
    }
    setNickname(value);
  };

  return (
    <input data-testid="my-input" type="text" onChange={(e) => setNicknameHandler(e.target.value)} value={nickname} />
  );
};
