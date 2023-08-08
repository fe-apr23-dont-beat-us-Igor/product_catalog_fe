import React from 'react';
import { createContext, FC, useContext, Dispatch, SetStateAction } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useCart } from '../hooks/useCart';
import { useLike } from '../hooks/useLike';

interface AppContext {
  cart: string[];
  toggleItem: (value: string) => void;
  removeItem: (value: string) => void;
  removeAll: () => void;

  likeStorage: string[];
  toggleLike: (value: string) => void;
}

const initialContext = {
  cart: [],
  toggleItem: () => {},
  removeItem: () => {},
  removeAll: () => {},

  likeStorage: [],
  toggleLike: () => {},
};

const Context = createContext<AppContext>(initialContext);

type Props = {
  children: React.ReactNode;
};

export const AppContext: FC<Props> = ({ children }) => {
  const { cart, toggleItem, removeItem, removeAll } = useCart();
  const { likeStorage, toggleLike } = useLike();

  const value: AppContext = {
    cart,
    toggleItem,
    removeItem,
    removeAll,

    likeStorage,
    toggleLike,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAppContext = () => useContext<AppContext>(Context);
