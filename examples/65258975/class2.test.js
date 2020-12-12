const class1 = require('./class1');
const class2 = require('./class2');

describe('65258975', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('Test Class2 catch block', () => {
    const getDataSpy = jest.spyOn(class1, 'getData').mockImplementationOnce(() => {
      throw new Error('Error');
    });
    const actual = class2.getData();
    expect(actual).toBeInstanceOf(Error);
    expect(actual.message).toEqual('Error');
    expect(getDataSpy).toBeCalledTimes(1);
  });

  test('should pass', () => {
    const getDataSpy = jest.spyOn(class1, 'getData').mockReturnValueOnce('teresa teng');
    const actual = class2.getData();
    expect(actual).toEqual({ data: 'teresa teng' });
    expect(getDataSpy).toBeCalledTimes(1);
  });
});
