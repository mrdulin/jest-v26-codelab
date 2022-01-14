type SpellState = {
  spell?: any;
  isLoading: boolean;
  error?: string;
};

type SpellAction = { type: 'FETCH_SUCCESS'; spell: any } | { type: 'FETCH_FAILED'; error: string };

export const reducer = (prevState: SpellState, action: SpellAction): SpellState => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { isLoading: false, spell: action.spell };
    }
    case 'FETCH_FAILED': {
      return { ...prevState, isLoading: false, error: action.error };
    }
    default:
      return prevState;
  }
};
