import { PlayerGameDataProvider } from './UserContext';
import GamesList from './GamesList';
import React from 'react';

function App() {
  return (
    <PlayerGameDataProvider>
      <div className="App">
        <header className="App-header">
          <GamesList />
        </header>
      </div>
    </PlayerGameDataProvider>
  );
}

export default App;
