import { getActionTypeName } from './functions';

export const RESET_TYPE = getActionTypeName('RESET');
export const FETCH_TYPE = getActionTypeName('RESET');
export const SHOW_TYPE = getActionTypeName('RESET');

const initialState = {
  name: 'John',
};

export const buttonReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case RESET_TYPE: {
      const newState = { a: 'a', ...initialState };
      return newState;
    }
    case FETCH_TYPE: {
      const newState = { b: 'b', ...initialState };
      return newState;
    }
    case SHOW_TYPE: {
      const newState = { c: 'c', ...initialState };
      return newState;
    }
    default: {
      return state;
    }
  }
};
