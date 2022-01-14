import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouteMatch, Link } from 'react-router-dom';

interface MyComponentProps {
  myId?: string;
  link?: string;
}

export const MyComponent: React.FunctionComponent<MyComponentProps> = ({ myId = 'default-id', link, children }) => {
  const [myOutlet, setMyOutlet] = useState<HTMLOListElement>();
  const match = useRouteMatch();
  console.log('match: ', match);

  useEffect(() => {
    const outletElement = document.getElementById(myId) as HTMLOListElement;
    if (outletElement) {
      setMyOutlet(outletElement);
    }
  }, [myId]);

  if (!myOutlet) {
    return null;
  }

  return createPortal(
    <li>
      <Link to={link || match.url}>{children}</Link>
    </li>,
    myOutlet
  );
};

export default MyComponent;
