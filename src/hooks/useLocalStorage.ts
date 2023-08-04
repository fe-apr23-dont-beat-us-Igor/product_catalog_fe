import { useCallback, useEffect, useState } from 'react';

export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  const storage = window.localStorage;

  const readValue = (): T => {
    const item = storage.getItem(key); 

    if (!item) {
      storage.setItem(key, JSON.stringify(initialValue));
    }

    return item ? (JSON.parse(item) as T) : initialValue;
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

  useEffect(() => {
    storage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
};
