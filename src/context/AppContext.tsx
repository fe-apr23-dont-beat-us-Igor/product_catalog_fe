import React from 'react';
import { createContext, FC, useContext, Dispatch, SetStateAction } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useCart } from '../hooks/useCart';
import { useLike } from '../hooks/useLike';
import { UseAuth, useAuth } from '../hooks/useAuthToken';

interface AppContext extends UseAuth {
  cart: string[];
  toggleItem: (value: string) => void;
  removeItem: (value: string) => void;
  removeAll: () => void;

  likeStorage: string[];
  toggleLike: (value: string) => void;
}

const initialContext = {
  //cart
  cart: [],
  toggleItem: () => {},
  removeItem: () => {},
  removeAll: () => {},
  // favourite
  likeStorage: [],
  toggleLike: () => {},
  // auth
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
};

const Context = createContext<AppContext>(initialContext);

type Props = {
  children: React.ReactNode;
};

export const AppContext: FC<Props> = ({ children }) => {
  const { login, logout, isAuthenticated, setIsAuthenticated } = useAuth();
  const { cart, toggleItem, removeItem, removeAll } = useCart(isAuthenticated);
  const { likeStorage, toggleLike } = useLike(isAuthenticated);

  const value: AppContext = {
    cart,
    toggleItem,
    removeItem,
    removeAll,
    likeStorage,
    toggleLike,

    login,
    logout,
    isAuthenticated,
    setIsAuthenticated,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAppContext = () => useContext<AppContext>(Context);
