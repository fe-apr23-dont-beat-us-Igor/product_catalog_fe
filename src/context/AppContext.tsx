import React from 'react';
import { createContext, FC, useContext, Dispatch, SetStateAction } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useCart } from '../hooks/useCart';

interface AppContext {
  cart: string[];
  toggleItem: (value: string) => void;
  removeItem: (value: string) => void;
  removeAll: () => void;

}

const initialContext = {
  cart: [],
  toggleItem: () => {},
  removeItem: () => {},
  removeAll: () => {},

};

const Context = createContext<AppContext>(initialContext);

type Props = {
  children: React.ReactNode;
};

export const AppContext: FC<Props> = ({ children }) => {
  const { cart, toggleItem, removeItem, removeAll } = useCart();
  const [likeStorage, setLikeStorage] = useLocalStorage<string[]>('like', []);
  // const { addProductToCart, remove } = useCart();

  const value: AppContext = {
    cart,
    toggleItem,
    removeItem,
    removeAll,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAppContext = () => useContext<AppContext>(Context);
