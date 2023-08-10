import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useCart = (isAuthenticated: boolean) => {
  const [cart, setCart] = useLocalStorage<string[]>('cart', []);

  useEffect(() => {
    if (isAuthenticated) {
      //завантаження даних з сервера;
    } else {
      setCart([]);
    }
  }, [isAuthenticated]);

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

  return { cart, toggleItem, removeItem, removeAll };
};
