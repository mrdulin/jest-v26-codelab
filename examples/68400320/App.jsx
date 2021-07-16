import React from 'react';
import Analytics from './Analytics';

export function Login({ onLoginSuccess }) {
  setTimeout(function () {
    console.log('TIMEOUT OVER');
    onLoginSuccess();
  }, 2000);
}

function App() {
  function handleClick() {
    console.log('Login');
    Login({
      onLoginSuccess: onSuccess,
    });
  }
  function onSuccess() {
    console.log('Login success');
    Analytics.analyze();
  }
  return (
    <>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Login
      </button>
    </>
  );
}

export default App;
