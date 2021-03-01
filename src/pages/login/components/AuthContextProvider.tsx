import React, { createContext, useContext, useEffect, useState } from 'react';
import { FunctionComponent } from 'react';
import authService, { Credentials } from '../services/authService';

type AuthContext = {
  login: (credentials: Credentials, cb: () => void) => Promise<void>;
  logout: (cb: () => void) => void;
  isAuthenticated: boolean;
};

const authContext = createContext<null | AuthContext>(null);

export function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  );

  const login = (credentials: Credentials, cb: () => void) => {
    return authService.login(credentials, (isAuthenticated) => {
      setIsAuthenticated(isAuthenticated);
      cb();
    });
  };

  const logout = (cb: () => void) => {
    return authService.logout((isAuthenticated) => {
      setIsAuthenticated(isAuthenticated);
      cb();
    });
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
}

const ProvideAuth: FunctionComponent = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export default ProvideAuth;
