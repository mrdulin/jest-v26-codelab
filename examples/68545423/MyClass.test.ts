import { MyClass } from './MyClass';
import { ISettings, Settings } from './Settings';
//@ts-ignore
import { ExternalObject } from 'external-library';

jest.mock(
  'external-library',
  () => {
    return { ExternalObject: jest.fn() };
  },
  { virtual: true }
);

describe('68545423', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('should pass', () => {
    let myImpl = new MyClass();
    let settings: ISettings = new Settings();
    jest
      .spyOn(settings, 'getSetting')
      .mockImplementationOnce(() => 'abcd')
      .mockImplementationOnce(() => 'xyz');

    let inst = myImpl.createInstance(settings);
    expect(inst).toBeTruthy();
    expect(ExternalObject).toBeCalledWith('abcd', 'xyz');
  });
});
