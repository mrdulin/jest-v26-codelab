import { SomeService } from './service';

describe('69041800', () => {
  test('should pass', () => {
    const service = new SomeService();
    let _ready;
    const mTwitterData = new Proxy({} as any, {
      set: (obj, prop, value) => {
        if (prop === 'ready') {
          _ready = value;
        }
        obj[prop] = value;
        return true;
      },
    });
    const getTwitterWidgetDataSpy = jest.spyOn(service, 'getTwitterWidgetData').mockReturnValue(mTwitterData);
    service.startScriptLoad();
    expect(getTwitterWidgetDataSpy).toBeCalledTimes(1);
    // test ready private method
    const mCallback = jest.fn();
    _ready(mCallback);
    expect(mTwitterData._e).toEqual([mCallback]);
    getTwitterWidgetDataSpy.mockRestore();
  });
});
