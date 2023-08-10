import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { UsersData } from '../context/AppContext';
import { setUsersData } from '../api/api';

export const useLike = (isAuthenticated: boolean) => {
  const [likeStorage, setLikeStorage] = useLocalStorage<string[]>('like', []);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     setUsersData('favourites', likeStorage);
  //   }
  // }, [isAuthenticated, likeStorage]);

  const toggleLike = (id: string) => {
    setLikeStorage((prev) => {
      const hasId = prev.includes(id);

      return hasId ? prev.filter((item) => item !== id) : [...prev, id];
    });
  };

  return { likeStorage, toggleLike, setLikeStorage };
};
