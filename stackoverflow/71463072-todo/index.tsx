import React, { useState } from 'react';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          const { value } = e.target;
          setUsername(value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          const { value } = e.target;
          setPassword(value);
        }}
      />
      <button disabled={username.length === 0 || password.length === 0} type="submit">
        login
      </button>
    </form>
  );
};
