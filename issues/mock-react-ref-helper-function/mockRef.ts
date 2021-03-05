import { ComponentClass } from 'react';

export function mockRefReturnValueOnce<Method extends keyof Element>(
  Component: ComponentClass,
  refProp: string,
  method: Method,
  value: any
) {
  const refKey = Symbol(refProp);
  Object.defineProperty(Component.prototype, refProp, {
    get() {
      return this[refKey];
    },
    set(ref) {
      if (ref) {
        jest.spyOn(ref, method).mockReturnValueOnce(value);
      }
      this[refKey] = ref;
    },
    configurable: true,
  });
}

type m = keyof Element;
