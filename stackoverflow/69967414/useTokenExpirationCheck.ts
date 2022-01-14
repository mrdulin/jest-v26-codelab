import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const logout = () => ({ type: 'LOGOUT' });

export default function useTokenExpirationCheck(exp: number): void {
  const dispatch = useDispatch();
  useEffect(() => {
    if (exp) {
      console.log('exp: ', exp);
      const timeToLogout = exp * 1000 - Date.now();
      setTimeout(() => {
        dispatch(logout());
      }, timeToLogout);
    }
  }, [exp]);
}
