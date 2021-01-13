import React from 'react';

const MyInput = ({ value, list, id, onChange }) => {
  return (
    <label>
      <strong>{id}</strong>
      <div>
        <input type="text" value={value} onChange={onChange} list={id} />
        <datalist id={id} aria-label="datalist-items">
          {list.map((item) => (
            <option key={`item-${item.id}`} aria-label="data-list-item" value={item.value} />
          ))}
        </datalist>
      </div>
    </label>
  );
};

export default MyInput;
