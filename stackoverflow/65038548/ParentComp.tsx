import React, { useState } from 'react';
import { MyModal } from './MyModal';

export const ParentComp = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <MyModal showModal={openModal} onClose={() => setOpenModal(false)} />
      <button data-testid="open-modal-button" onClick={() => setOpenModal(true)}>
        Test
      </button>
    </>
  );
};
