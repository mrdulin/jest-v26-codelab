export const makeReducerSetState = (dispatch) => (type) => (payload) => dispatch({ type, payload });
