export function main() {
  const {
    common: {
      utils: { fn1 },
      report: { fn2 },
      request: { get, post },
    },
  } = window.CUSTOM_OBJ;

  fn1();
  fn2();
  get();
  post();
}
