import { useLocalStorage } from './useLocalStorage';

export const useLike = () => {
  const [likeStorage, setLikeStorage] = useLocalStorage<string[]>('like', []);

  const toggleLike = (id: string) => {
    setLikeStorage((prev) => {
      const hasId = prev.includes(id);

      return hasId ? prev.filter((item) => item !== id) : [...prev, id];
    });
  };

  return { likeStorage, toggleLike };
};
