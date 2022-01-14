const onMessage = ({ data }) => {
  console.log('On onMessage has been fired');
};

window.addEventListener('message', onMessage);
