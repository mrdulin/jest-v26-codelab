import React from 'react';

export const MyModal = ({ showModal, onClose }) => {
  return (
    showModal && (
      <>
        <div>This is a modal</div>
        <button data-testid="close-modal-button" onClick={onClose}>
          Close
        </button>
      </>
    )
  );
};
