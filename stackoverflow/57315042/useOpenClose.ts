import { useState } from 'react';

export default function useOpenClose(initial = false) {
  const [isOpen, setOpen] = useState(initial);

  const open = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };

  return [isOpen, { open, close }] as const;
}
