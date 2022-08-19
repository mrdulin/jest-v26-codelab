import React from 'react';
import { useEffect, useState } from 'react';

const id = 'popup-active';
const Popup = (props) => {
  const [popupActive, setPopupActive] = useState(() => {
    const value = window.localStorage.getItem(id);
    return value !== null ? JSON.parse(value) : true;
  });

  useEffect(() => {
    window.localStorage.setItem(id, popupActive);
  }, [popupActive]);

  const handleX = () => {
    setPopupActive(!popupActive);
  };

  return (
    <div
      style={{
        visibility: popupActive ? 'visible' : 'hidden',
        opacity: popupActive ? '1' : '0',
      }}
    >
      <div>
        <div>{props.children}</div>
        <button data-testid="button-popup" onClick={handleX}>
          Got It
        </button>
      </div>
    </div>
  );
};

export default Popup;
