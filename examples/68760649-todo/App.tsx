import React, { useState, useEffect } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoggedIn(true), 1000);
  }, []);
  return <button data-testid="login-button">{loggedIn ? 'Log Out' : 'Log In'}</button>;
}

export default App;
