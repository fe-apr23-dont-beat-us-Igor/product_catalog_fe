import React from 'react';
import { createContext, FC, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface AppContext {
  cartStorage: string[];
  addProductToCart: (value: string) => void;
  likeStorage: string[];
  addProductToLikeStorage: (value: string) => void;
}

const initialContext = {
  cartStorage: [],
  addProductToCart: () => {},
  likeStorage: [],
  addProductToLikeStorage: () => {},
};

const Context = createContext<AppContext>(initialContext);

type Props = {
  children: React.ReactNode;
};

export const AppContext: FC<Props> = ({ children }) => {
  const [cartStorage, setCartStorage] = useLocalStorage<string[]>('cart', []);
  const [likeStorage, setLikeStorage] = useLocalStorage<string[]>('like', []);

  const addProductToCart = (id: string) =>
    setCartStorage((prev) => {
      const uniques: string[] = [...prev];
      return uniques.includes(id) ? uniques : [...uniques, id];
    });

  const addProductToLikeStorage = (id: string) =>
    setLikeStorage((prev) => {
      const uniques: string[] = [...prev];
      return uniques.includes(id) ? uniques : [...uniques, id];
    });

  const value: AppContext = {
    cartStorage,
    addProductToCart,
    likeStorage,
    addProductToLikeStorage,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAppContext = () => useContext<AppContext>(Context);
