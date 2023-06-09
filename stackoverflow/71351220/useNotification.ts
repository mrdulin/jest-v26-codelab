import { useDispatch, useSelector } from "react-redux";

export const getNotificationsState = state => state.notifications;

export const NOTIFICATION_ACTIONS = {
  ADD_TOAST: 'ADD_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST'
}
export const NOTIFICATION_TIMEOUT = 3000;

export function useNotification() {
  const dispatch = useDispatch();
  const notifications = useSelector(getNotificationsState);
  function toast(type, message) {
    const id = notifications.toasts.length;
    const data = { type, message, id };
    dispatch({ type: NOTIFICATION_ACTIONS.ADD_TOAST, payload: data });

    setTimeout(() => {
      dispatch({ type: NOTIFICATION_ACTIONS.REMOVE_TOAST, payload: id });
    }, NOTIFICATION_TIMEOUT);
  }

  return toast;
}