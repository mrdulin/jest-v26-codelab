import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as slice from './slice';

export const useUser = (): void => {
  const dispatch = useDispatch();

  const { user } = useParams<{ user: string }>();
  useEffect(() => {
    dispatch(slice.getUser(user));
  }, [dispatch, user]);
};
