const hashChangeCallback = (event) => {
  console.log('event', event.oldURL);
};

export const hashHandler = () => {
  return {
    add: () => {
      window.addEventListener('hashchange', (event) => hashChangeCallback(event), false);
    },
    remove: () => {
      window.removeEventListener('hashchange', (event) => hashChangeCallback(event), false);
    },
  };
};
