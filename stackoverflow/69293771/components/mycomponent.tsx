import React, { useState, useEffect } from 'react';
import myservice from '../services/myservice';
import { ServiceResponse } from '../services/serviceResponse';

export const MyComponent = () => {
  const [data, setData] = useState<ServiceResponse[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const serviceData = await myservice.GetServiceData();
      if (!(serviceData instanceof Error)) {
        setData(serviceData);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <></>;
  }

  return <div>row</div>;
};
