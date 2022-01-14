export interface Item {}

const items = { a: '1', b: '2' };

export const findAll = async (): Promise<Item[]> => Object.values(items);
