import { useHistory } from 'react-router-dom';
import React from 'react';

export default function Tags() {
  const history = useHistory();

  const isSelected = (category: string) => {
    history.push(`/?category=${category}`);
  };

  return (
    <>
      <ul aria-label="contacts">
        <li id="backend" onClick={() => isSelected('backend')}></li>
        <li id="frontend" onClick={() => isSelected('frontend')}></li>
      </ul>
    </>
  );
}
