const callback = () => {
  // do something
};

export const makeClass = (Class) => {
  const cls = new Class();
  cls.method(callback);
};
