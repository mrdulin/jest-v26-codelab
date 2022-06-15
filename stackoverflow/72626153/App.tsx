import React from 'react';
import { useEffect } from 'react';

const numbers = [1, 2, 3, 4, 5, 6];
export default function App() {
  useEffect(() => {
    const headings = [...document.getElementsByClassName('heading')];

    if (!!headings.length) {
      console.log('DO SOMETHING !!');
    }
    headings.map((heading, i) => {
      return heading.setAttribute('id', `header-toggle-${i}`);
    });
  }, []);

  return (
    <div className="App">
      {numbers.map((num) => {
        return <h1 key={num} className="heading">{num}</h1>;
      })}
    </div>
  );
}
