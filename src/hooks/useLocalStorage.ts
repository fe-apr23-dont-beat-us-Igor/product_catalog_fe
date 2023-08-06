// import { useCallback, useEffect, useState } from 'react';

// export const useLocalStorage = <T>(
//   key: string,
//   initialValue: T,
// ): [T, (value: T) => void] => {
//   const storage = window.localStorage;

//   const readValue = (): T => {
//     const item = storage.getItem(key); 

//     if (!item) {
//       storage.setItem(key, JSON.stringify(initialValue));
//     }

//     return item ? (JSON.parse(item) as T) : initialValue;
//   };

//   const [storedValue, setStoredValue] = useState<T>(readValue);

//   useEffect(() => {
//     storage.setItem(key, JSON.stringify(storedValue));
//   }, [storedValue, key]);

//   return [storedValue, setStoredValue];
// };

import { useState, useEffect, Dispatch, SetStateAction } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(() => {
    let currentValue

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(initialValue))
    } catch (error) {
      currentValue = initialValue
    }

    return currentValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}
