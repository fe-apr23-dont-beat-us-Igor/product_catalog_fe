import React from 'react';
import { createContext, FC, useContext, Dispatch, SetStateAction } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface AppContext {
  cartStorage: string[];
  likeStorage: string[];
  setCartStorage: Dispatch<SetStateAction<string[]>>;
  setLikeStorage: Dispatch<SetStateAction<string[]>>;
}

const initialContext = {
  cartStorage: [],
  addProductToCart: () => {},
  likeStorage: [],
  addProductToLikeStorage: () => {},
  setCartStorage: () => {},
  setLikeStorage: () => {},
};

const Context = createContext<AppContext>(initialContext);

type Props = {
  children: React.ReactNode;
};

export const AppContext: FC<Props> = ({ children }) => {
  const [cartStorage, setCartStorage] = useLocalStorage<string[]>('cart', []);
  const [likeStorage, setLikeStorage] = useLocalStorage<string[]>('like', []);
  // const { addProductToCart, remove } = useCart();

  const addProductToCart = (id: string) =>
    setCartStorage((prev) => {
      const uniques: string[] = [...prev];
      return uniques.includes(id) ? uniques : [...uniques, id];
    });

  const remove = (id: string) => {
    setCartStorage((prev) => prev.filter((item) => item !== id));
  };

  const value: AppContext = {
    cartStorage,
    setCartStorage,
    likeStorage,
    setLikeStorage,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAppContext = () => useContext<AppContext>(Context);

export const useCart = () => {
  const [cartStorage, setCartStorage] = useLocalStorage<string[]>('cart', []);

  const toggleItem = (id: string) => {
    setCartStorage((prev) => {
      const hasId = prev.includes(id);

      return hasId ? prev.filter((item) => item !== id) : [...prev, id];
    });
  };

  const removeItem = (id: string) => {
    setCartStorage((prev) => prev.filter((item) => item !== id));
  };

  const removeAll = () => setCartStorage([]);
  // return { addProductToCart, remove };
};
