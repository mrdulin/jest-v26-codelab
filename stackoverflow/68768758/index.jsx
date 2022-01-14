import React from 'react';
import * as configData from './config.json';
console.log('configData: ', configData);

export default function ComponentElement() {
  return <div>{configData.isFlag ? 'ArrowForwardIosIcon' : 'others'}</div>;
}
