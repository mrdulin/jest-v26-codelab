type Unload = () => Promise<void>;

let mockedUnload: jest.MockedFunction<Unload>;
let mockedMiniApp: jest.MockedFunction<() => Promise<{ unload: Unload }>>;

beforeEach(() => {
  mockedUnload = jest.fn(() => Promise.resolve());
  mockedMiniApp = jest.fn(() => Promise.resolve({ unload: mockedUnload }));
});
