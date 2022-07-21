import React, { useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  useEffect(() => {
    if (isDataLoaded) {
      setIsLoading(false);
    }
  }, [isDataLoaded]);

  useEffect(() => {
    setTimeout(() => setIsDataLoaded(true), 4000);
  }, []);

  return (
    <div className="App">
      {isLoading && <div>Loading....</div>}
      {!isLoading && (
        <header className="App-header">
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      )}
    </div>
  );
}

export default App;
