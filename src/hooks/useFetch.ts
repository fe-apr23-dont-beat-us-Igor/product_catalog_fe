import { useState, useEffect } from 'react';

export const useFetch = <T>() => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    console.log('1');
  }, []);

  return { data, loading, error };
};
