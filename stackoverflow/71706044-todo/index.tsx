import React, { useState } from 'react';

export const MyComp = () => {
  const [listVisible, setListVisible] = useState(true);
  console.log(listVisible);
  return (
    <>
      {listVisible && (
        <ul data-testid="list">
          <li>item 1</li>
        </ul>
      )}
      <button onClick={() => setListVisible(false)}>query</button>
    </>
  );
};
