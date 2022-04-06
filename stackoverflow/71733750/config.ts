export const Config = (() => {
  let data;
  console.log(process.env.NODE_ENV);
  switch (process.env.NODE_ENV) {
    case 'development':
      data = '123';
      break;
    case 'production':
      data = '456';
      break;
    default:
      break;
  }
  return { data };
})();
