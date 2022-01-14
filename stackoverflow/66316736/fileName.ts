import Constants from './common-packages';

export const lockNextCardIfUncompleted = (data: any[]) => {
  if (data.length !== 0) {
    const locked = data.filter((e: any) => e.Type === Constants.TEXT.Type);
    if (locked.length === 0) return false;
    return true;
  }
  return false;
};
