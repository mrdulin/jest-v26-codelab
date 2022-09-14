import { mainFunc } from './module1';
import * as module2 from './module2';

describe('73707110', () => {
  test('Should not call second function until first function resolved', async () => {
    jest.useFakeTimers();

    const spyOnFuncA = jest.spyOn(module2, 'funcA').mockImplementation(() => new Promise((r) => setTimeout(r, 1000)));
    const spyOnFuncB = jest.spyOn(module2, 'funcB').mockImplementation();

    const promise = mainFunc();
    expect(spyOnFuncA).toBeCalled();
    expect(spyOnFuncB).not.toBeCalled();
    jest.runAllTimers();
    await promise;
    expect(spyOnFuncB).toBeCalled();
  });
});
