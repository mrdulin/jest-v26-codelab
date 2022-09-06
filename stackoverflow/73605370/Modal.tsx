import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, toggeleVisibility, content }) => {
  const el = useRef(document.createElement('div'));
  useEffect(() => {
    const modalRenderDiv = document.querySelector('#modal-div');
    const current = el.current;
    modalRenderDiv?.appendChild(current);
    return () => void modalRenderDiv?.removeChild(current);
  }, []);

  return isOpen ? createPortal(content, el.current) : null;
};

export default Modal;
