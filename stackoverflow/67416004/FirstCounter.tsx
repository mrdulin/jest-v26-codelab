import React from 'react';

function FirstCounter({ count, onClick }) {
  console.log('FirstCounter', count);
  return (
    <span className="firstCounter" onClick={onClick}>
      {count}
    </span>
  );
}

export default React.memo(FirstCounter);
