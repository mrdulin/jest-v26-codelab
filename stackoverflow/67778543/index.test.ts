import { getCanvasOptions } from './';

describe('67778543', () => {
  it('should pass', () => {
    const actual = getCanvasOptions();
    expect(actual).toEqual({
      allowTaint: true,
      letterRendering: 1,
      foreignObjectRendering: true,
      quality: 1,
      width: 0,
      height: 0,
      scale: 1,
      useCORS: true,
      ignoreElements: expect.any(Function),
    });
    // test ignoreElements method
    const rval = actual.ignoreElements({ nodeName: 'NOSCRIPT' });
    expect(rval).toBeTruthy();
  });
});
