import { ComponentClass } from 'react';

export function mockRefReturnValueOnce(Component: ComponentClass, refProp: string, method: string, value: any) {
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
