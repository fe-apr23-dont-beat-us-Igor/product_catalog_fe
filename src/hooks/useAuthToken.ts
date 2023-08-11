import { useState, useEffect } from 'react';
import { sendAuthCred } from '../api/api';
import { AuthCredentials } from '../components/Auth/RegistrationForm';
import { useAppContext } from '../context/AppContext';
import { massageList } from '../components/UserMessage/UserMessage';

export const setAuthTokenCookie = (authToken: string) => {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 8 * 60 * 60 * 1000);

  document.cookie = `authToken=${authToken}; expires=${expirationDate.toUTCString()}; path=/`;
};

export const getAuthTokenFromCookie = () => {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'authToken') {
      return value;
    }
  }
  return null;
};

export interface UseAuth {
  login: (value: AuthCredentials) => void;
  logout: () => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export const useAuth = (): UseAuth => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (authCred: AuthCredentials) => {
    const res = sendAuthCred(authCred)
      .then((data) => {
        setAuthTokenCookie(data.token);
        setIsAuthenticated(true);
        window.localStorage.setItem('username', authCred.username);
      })
      .catch((error) => {
        setIsAuthenticated(false);
        return error;
      });

    return res;
  };

  const logout = () => {
    document.cookie =
      'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsAuthenticated(false);
  };

  return {
    login,
    logout,
    isAuthenticated,
    setIsAuthenticated,
  };
};
