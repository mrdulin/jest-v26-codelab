import { useState } from 'react';

const useCustomHook = () => {
  const [myState, setMyState] = useState(false);

  const handleSetMyState = () => {
    return setMyState((prevState) => !prevState);
  };

  return [myState, handleSetMyState];
};

export default useCustomHook;
