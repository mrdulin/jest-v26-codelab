import initGreeter from './greeter';

export const greetSomeone = (name: string) => {
  const greeter = initGreeter();
  greeter.sayHello(name);
};
