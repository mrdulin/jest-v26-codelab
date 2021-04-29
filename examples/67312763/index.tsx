import React, { useEffect } from 'react';

export const MyComp = ({ userId, myAction }) => {
  useEffect(() => {
    myAction(userId);
  }, [userId]);

  return <div>Test</div>;
};
