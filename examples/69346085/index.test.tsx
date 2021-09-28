import { shallow } from 'enzyme';
import React from 'react';
import AppRoutes from './';

describe('69346085', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should pass', () => {
    const handleBeforeUnloadSpy = jest.spyOn(AppRoutes.prototype, 'handleBeforeUnload');
    jest
      .spyOn(window, 'addEventListener')
      .mockImplementation((type: string, listener: EventListenerOrEventListenerObject) => {
        typeof listener === 'function' && listener({} as Event);
      });
    shallow(<AppRoutes />);

    expect(handleBeforeUnloadSpy).toHaveBeenCalled();
  });
});
