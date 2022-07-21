import React from 'react';

export interface MyComponentProps {
  myCallBack(): void;
}
export const MyComponent = ({ myCallBack }: React.PropsWithChildren<MyComponentProps>) => {
  const ref: React.RefObject<HTMLInputElement> = React.createRef();
  const [showItem, setShowItem] = React.useState(false);

  React.useLayoutEffect(() => {
    console.log('clientHeight: %s, scrollHeight: %s', ref.current?.clientHeight, ref.current?.scrollHeight);
    console.log('ref.current: ', ref.current);
    if (ref.current && ref.current.clientHeight < ref.current.scrollHeight) {
      setShowItem(true);
    }
  }, []);

  const someAction = (e: React.ChangeEvent<any>) => {
    myCallBack();
  };

  return (
    <div>
      <div ref={ref}>
        <p>Some text...</p>
      </div>
      {showItem && (
        <div>
          <p className="some-class" onClick={someAction}>
            Some more text...
          </p>
        </div>
      )}
    </div>
  );
};
