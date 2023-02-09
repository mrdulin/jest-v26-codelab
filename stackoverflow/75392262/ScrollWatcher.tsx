import React from 'react';
import { useEffect } from 'react';

interface Props {
  onReachBottom: () => void;
}

export const ScrollWatcher = ({ onReachBottom }: Props) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        onReachBottom();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onReachBottom]);

  return <div />;
};
