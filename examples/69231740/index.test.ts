type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never }[keyof T] & string;

const methods: FunctionPropertyNames<typeof console>[] = ['log', 'error'];

describe('69231740', () => {
  beforeEach(() => {
    methods.forEach((m) => jest.spyOn(console, m).mockImplementation());
  });
});
