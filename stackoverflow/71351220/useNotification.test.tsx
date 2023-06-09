import { renderHook, act } from "@testing-library/react-hooks";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NOTIFICATION_ACTIONS, NOTIFICATION_TIMEOUT, useNotification } from "./useNotification";
import React from "react";

describe('useNotification', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  })
  afterAll(() => {
    jest.useRealTimers();
  })
  test('should pass', () => {
    const rootReducer = (state = { notifications: { toasts: [] as any[] } }, action) => {
      switch (action.type) {
        case NOTIFICATION_ACTIONS.ADD_TOAST:
          return { ...state, notifications: { toasts: [...state.notifications.toasts, action.payload] } }
        case NOTIFICATION_ACTIONS.REMOVE_TOAST:
          return { ...state, notifications: { toasts: state.notifications.toasts.filter(t => t.id !== action.payload) } }
        default:
          return state;
      }
    }
    const store = createStore(rootReducer);
    const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
    const { result } = renderHook(useNotification, { wrapper });

    act(() => {
      result.current('a', 'ok');
    })
    expect(store.getState()).toEqual({ notifications: { toasts: [{ message: 'ok', type: 'a', id: 0 }] } });

    act(() => {
      jest.advanceTimersByTime(NOTIFICATION_TIMEOUT);
    })

    expect(store.getState()).toEqual({ notifications: { toasts: [] } });
  })
});