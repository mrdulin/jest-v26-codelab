import React from 'react';
import { useSelector } from 'react-redux';

export type Template = {
  id: string;
  name: string;
};
export type RootState = {
  templates: Template[];
};

export const MyComp = () => {
  const templates = useSelector<RootState>((state) => state.templates);
  console.log('templates: ', templates);
  return <div>MyComp</div>;
};
