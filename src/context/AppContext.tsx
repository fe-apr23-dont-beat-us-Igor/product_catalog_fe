import React from 'react';
import {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { useCart } from '../hooks/useCart';
import { useLike } from '../hooks/useLike';
import { UseAuth, useAuth } from '../hooks/useAuthToken';
import { Message } from '../components/UserMessage/UserMessage';
import { getUsersData, setUsersData } from '../api/api';
import { useAOS } from '../hooks/useAOS';

interface AppContext extends UseAuth {
  cart: string[];
  toggleItem: (value: string) => void;
  removeItem: (value: string) => void;
  removeAll: () => void;

  likeStorage: string[];
  toggleLike: (value: string) => void;

  message: Message | null;
  setMessage: (value: Message | null) => void;
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
  //alerts
  message: null,
  setMessage: () => {},
};

const Context = createContext<AppContext>(initialContext);

type Props = {
  children: React.ReactNode;
};

export interface UsersData {
  id: number;
  favourites: string | null;
  cart: string | null;
}

export const AppContext: FC<Props> = ({ children }) => {
  useAOS();
  const { login, logout, isAuthenticated, setIsAuthenticated } = useAuth();

  const { cart, toggleItem, removeItem, removeAll, setCart } =
    useCart(isAuthenticated);
  const { likeStorage, toggleLike, setLikeStorage } = useLike(isAuthenticated);
  const [message, setMessage] = useState<Message | null>(null);

  // const loadUsersData = useCallback(async () => {
  //   console.log(isAuthenticated)
  //   if (isAuthenticated) {
  //     getUsersData().then((data) => {
  //       console.log(data);
  //       if (data.cart) {
  //         const cartData = data.cart.split(' ');
  //         setCart(cartData);
  //       }
  //       if (data.favourites) {
  //         const favorData = data.favourites.split(' ');
  //         setLikeStorage(favorData);
  //       }
  //     });
  //   }
  // }, [isAuthenticated, setCart, setLikeStorage]);

  // useEffect(() => {
  //   loadUsersData();
  // }, [isAuthenticated, loadUsersData]);

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
    message,
    setMessage,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAppContext = () => useContext<AppContext>(Context);
