import { useReducer, useEffect } from 'react';
import { reducer } from './reducers';

export const useShowSpell = (spellId: string) => {
  const [state, dispatch] = useReducer(reducer, {
    spell: null,
    isLoading: true,
    error: undefined,
  });

  useEffect(() => {
    let isMounted = true;

    const results = [];
    const err = new Error('timeout');
    dispatch({ type: 'FETCH_SUCCESS', spell: results });
    dispatch({ type: 'FETCH_FAILED', error: err.message });

    return () => {
      isMounted = false;
    };
  }, [spellId]);

  return state;
};
