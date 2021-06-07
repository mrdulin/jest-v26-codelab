import React, { useEffect } from 'react';

export function MyComponent() {
  useEffect(() => {
    window.onbeforeunload = () => {
      return '';
    };
    if (window.performance.getEntriesByType('navigation')[0].type === 'reload') {
      console.log('open external url');
    }
  }, []);

  return <div>my component</div>;
}
