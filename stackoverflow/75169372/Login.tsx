import React from 'react';
import { useState } from 'react';

export const Login = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div>
        <label>
          <span>email address</span>
          <input
            onChange={(event) => {
              setEmailId(event.target.value);
            }}
          />
        </label>
        <label>
          <span>password</span>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <button disabled={!emailId || !password}>Login</button>
      </div>
    </>
  );
};
