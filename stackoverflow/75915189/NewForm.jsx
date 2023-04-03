import React, { useEffect, useState } from 'react';

const NewForm = () => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue({ name: 'Nik' });
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <form>
      <input type="text" />
      <input type="email" />
      <button type={'button'}>Click</button>
      {value && <div>Div</div>}
    </form>
  );
};

export default NewForm;
