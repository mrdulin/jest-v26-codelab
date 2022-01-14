import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const getDetails = () => ({ type: 'GET_DETAIL' });

const Greet = () => {
  const dispatch = useDispatch();
  const stateData = useSelector((state: any) => state.stateDatalist);
  const countryData = useSelector((state: any) => state.CountryDatalist);
  useEffect(() => {
    if (stateData.length === 0 && countryData.length === 0) {
      dispatch(getDetails());
    }
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Greet;
