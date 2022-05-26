import { useEffect, useState } from 'react';
import React from 'react';

function App() {
  const [txt, setTxt] = useState('Loading...');

  useEffect(() => {
    const getTxt = async () => {
      try {
        const text = await window.waitText();
        setTxt(text.title);
      } catch (error) {
        console.error(error);
      }
    };

    getTxt();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{txt}</p>
      </header>
    </div>
  );
}

export default App;
