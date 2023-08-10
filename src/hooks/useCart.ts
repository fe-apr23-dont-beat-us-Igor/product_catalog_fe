import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { UsersData } from '../context/AppContext';
import { setUsersData } from '../api/api';

export const useCart = (isAuthenticated: boolean) => {
  const [cart, setCart] = useLocalStorage<string[]>('cart', []);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     setUsersData('cart', cart);
  //   }
  // }, [isAuthenticated, cart]);

  const toggleItem = (id: string) => {
    setCart((prev) => {
      const hasId = prev.includes(id);

      return hasId ? prev.filter((item) => item !== id) : [...prev, id];
    });
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item !== id));
  };

  const removeAll = () => setCart([]);

  return { cart, toggleItem, removeItem, removeAll, setCart };
};
