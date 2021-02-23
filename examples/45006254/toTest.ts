import { methodToMock } from './the-package-to-mock';

export function someAction() {
  return {
    type: methodToMock(),
  };
}
