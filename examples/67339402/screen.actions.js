export const loadScreen = () => async (dispatch, getState) => {
  window.location = 'www.google.com';
  console.log(window.location);
};
