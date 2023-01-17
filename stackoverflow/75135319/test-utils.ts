const serverTestbed = {
  host: '127.0.0.1',
  port: 5432,
};
type EmptyFunction = () => void;
interface FunctionLike {
  readonly name: string;
}
export const describeServerTest = (name: number | string | Function | FunctionLike, fn: EmptyFunction): void => {
  describe(name, () => {
    beforeEach(() => {
      console.log('server testbed run');
    });

    afterEach(async () => {
      console.log('server testbed close');
    });

    fn();
  });
};
