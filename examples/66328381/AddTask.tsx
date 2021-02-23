import React from 'react';
import { useDispatch } from 'react-redux';

const AddTask = () => {
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    const trimmedText = e.target.value.trim();
    if (e.which === 13 && trimmedText) {
      dispatch({ type: 'todoAdd', payload: trimmedText });
      e.target.value = '';
    }
  };

  return (
    <div>
      <input className="new-todo" placeholder="What needs to be done?" onKeyDown={handleKeyDown} />
    </div>
  );
};

export default AddTask;
