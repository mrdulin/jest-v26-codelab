import React from 'react';
import { createRef, useContext, useEffect } from 'react';
import { AnotherComponent } from './AnotherComponent';

export const MyContext = React.createContext({ date: '' });

export function MyComponent() {
  const ref = createRef<HTMLDivElement>();
  const { date } = useContext(MyContext);

  useEffect(() => {
    if (date && ref.current) {
      console.log('date: ', date);
      ref.current.scrollIntoView();
    }
  }, [date, ref]);

  return (
    <div>
      <AnotherComponent ref={ref} />
    </div>
  );
}
