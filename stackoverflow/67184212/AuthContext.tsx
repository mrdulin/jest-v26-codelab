import React, { useState } from 'react';

interface Context {
  currentUser: { uid: number } | null;
}
export const AuthContext = React.createContext<Context>({ currentUser: null });

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export const AuthConsumer = AuthContext.Consumer;
