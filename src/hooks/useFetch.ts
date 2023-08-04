import { useState, useEffect } from 'react';
import { getSomeProducts } from '../api/api';

export const useProducts = <T>(limit: number, page: number) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<T>();

  const params = `?limit=${limit}&page=${page}`;

  useEffect(() => {
    function loadData() {
      setLoading(true);

      getSomeProducts<T>(params)
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch(() => setError(true));

      setLoading(false);

      loadData();
    }
  }, []);

  return [data, loading, error];
};
