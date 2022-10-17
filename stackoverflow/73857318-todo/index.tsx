import React from 'react'

export const MyComponent = () => {
  const action = () => {
    console.log('here');
  };

  const onTransitionEnd = (e: React.TransitionEvent) => {
    console.log('e: ', e.propertyName)
    if (e.propertyName === 'margin-left') {
      action();
    }
  };

  return (
    <div data-testid='root' onTransitionEnd={onTransitionEnd} style={{ transition: 'margin-left 0.5s' }} />
  )
}
