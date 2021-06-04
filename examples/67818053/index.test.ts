import { obj } from './';

describe('67818053', () => {
  it('should pass', () => {
    const mEvent = { values_: { name: 'name' } };
    const forEachFeatureAtPixelSpy = jest
      .spyOn(obj.map, 'forEachFeatureAtPixel')
      .mockImplementationOnce((pixel, callback) => {
        callback(mEvent);
      });
    obj.method({ pixel: '12' });
    expect(forEachFeatureAtPixelSpy).toBeCalledWith('12', expect.any(Function));
    forEachFeatureAtPixelSpy.mockRestore();
  });
});
