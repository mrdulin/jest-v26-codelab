import React, { ReactElement, useEffect, useState } from 'react';
import { StyledNotifyButton } from './styles';

export const SomeComponent = (): ReactElement => {
  const [showNotifyButton, toggleNotifyButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      toggleNotifyButton(true);
    }, 5000);
  }, [toggleNotifyButton]);

  console.log('showNotifyButton: ', showNotifyButton);

  return (
    <div>
      <StyledNotifyButton visible={showNotifyButton} />
    </div>
  );
};
