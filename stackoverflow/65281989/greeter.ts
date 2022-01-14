const initGreeter = () => {
  return {
    sayHello: (name: string) => {
      console.log(`Hello: ${name}`);
    },
  };
};
export default initGreeter;
