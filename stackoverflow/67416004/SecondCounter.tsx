import React from 'react';

function SecondCounter({ count, onClick }) {
  console.log('SecondCounter', count);
  return (
    <span className="secondCounter" onClick={onClick}>
      {count}
    </span>
  );
}

export default React.memo(SecondCounter);
