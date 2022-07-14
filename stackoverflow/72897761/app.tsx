import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <header>app</header>
      <div className="App">
        <Routing />
      </div>
    </BrowserRouter>
  );
};
export default App;
