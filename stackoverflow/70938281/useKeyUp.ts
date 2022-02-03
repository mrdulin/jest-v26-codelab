import { useEffect } from 'react';

type Key = string;
export default function useKeyUp(key: Key, onKeyUp: Function) {
  useEffect(() => {
    const handleUp = (event: KeyboardEvent) => {
      const { key: releasedKey } = event;
      if (key === releasedKey) {
        if (onKeyUp) {
          onKeyUp();
        }
      }
    };

    window.addEventListener('keyup', handleUp);

    return () => {
      window.removeEventListener('keyup', handleUp);
    };
  }, [key, onKeyUp]);
}
