import React, { isValidElement } from 'react';

interface AppProps {
  children: React.ReactNode & React.ReactNode[];
}

export function App(props: AppProps) {
  const hasImage = props.children.some((child) => {
    return isValidElement(child) && child.type === 'img';
  });
  console.log('hasImage: ', hasImage);
  return <div>app</div>;
}
