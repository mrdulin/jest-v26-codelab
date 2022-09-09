import React from 'react';
import useCustomHook from './useHook';

export default function App() {
  const [state, handler] = useCustomHook();

  return state ? <div>state is true</div> : <div>state is false</div>;
}
