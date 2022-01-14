import { ALLOW_LIST } from './allowList';
console.log('ALLOW_LIST: ', ALLOW_LIST);

export const checkList = (id: string) => {
  if (ALLOW_LIST[id]) return true;
  return false;
};
