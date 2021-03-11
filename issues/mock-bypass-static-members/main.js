import { MyClass } from './myclass';

export function main() {
  const mycls = new MyClass();
  console.log(mycls.name);
  mycls.getById();
}
