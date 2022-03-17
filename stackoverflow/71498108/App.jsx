import React from 'react';

function App() {
  console.log(localStorage.token);
  return (
    <div className="App">
      <header className="App-header">{localStorage.getItem('token') && <div data-testid="hello">hello</div>}</header>
    </div>
  );
}

export default App;
