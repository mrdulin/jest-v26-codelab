import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseApp = initializeApp({});

export function signOutUser(): Promise<void> {
  return getAuth(firebaseApp).signOut();
}
