import React from 'react';
import { useQuery } from 'react-query';
// import * as api from './api';
import { getRecipes } from './api';

const LoginedIn = () => {
  const userId = '1';
  const { data } = useQuery(['getRecipes', userId], () => getRecipes(userId), {
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchInterval: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
  console.log('data: ', data);

  return <div>loginedIn</div>;
};

export default LoginedIn;
