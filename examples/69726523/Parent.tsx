import React, { useEffect, useState } from 'react';
import ChildComponent from './Child';

const ParentComponent = () => {
  const [showChildComponent, setShowChildComponent] = useState(false);

  useEffect(() => {
    let formTimeout;

    const setShowFormTimeout = () => {
      formTimeout = setTimeout(() => {
        setShowChildComponent(true);
      }, 4000);
    };

    setShowFormTimeout();

    return () => clearTimeout(formTimeout);
  }, []);

  return showChildComponent ? <ChildComponent /> : null;
};

export default ParentComponent;
