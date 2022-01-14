import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import React from 'react';

const getDetails = (id, otherId) => ({ type: 'GET_DETAILS' });

export const MyFunctionalComponent = () => {
  const { id, otherid } = useSelector((state: any) => state.user);
  const accounts = useSelector((state: any) => state.Selection.accounts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!accounts) {
      dispatch(getDetails(id, otherid));
    }
  }, []);

  if (!accounts) {
    return <div>CircularLoader</div>;
  }

  if (!accounts.length) {
    return <div>AccessUnavailablePanel</div>;
  }

  if (accounts.length === 1) {
    return <div>Redirect</div>;
  }

  return <div>MyList</div>;
};
