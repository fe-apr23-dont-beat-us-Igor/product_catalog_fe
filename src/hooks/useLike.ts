import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useLike = (isAuthenticated: boolean) => {
  const [likeStorage, setLikeStorage] = useLocalStorage<string[]>('like', []);

  useEffect(() => {
    if (isAuthenticated) {
      //завантаження даних з сервера;
    } else {
      setLikeStorage([]);
    }
  }, [isAuthenticated]);

  const toggleLike = (id: string) => {
    setLikeStorage((prev) => {
      const hasId = prev.includes(id);

      return hasId ? prev.filter((item) => item !== id) : [...prev, id];
    });
  };

  return { likeStorage, toggleLike };
};
