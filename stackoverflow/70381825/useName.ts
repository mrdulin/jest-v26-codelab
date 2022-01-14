import { useState } from 'react';

export const useName = () => {
  const [name, setState] = useState('');
  const setName = (firstName: string, lastName: string) => setState([firstName, lastName].join(' '));
  return { name, setName };
};
