import Aos from 'aos';
import { useEffect } from 'react';

import { react } from '@babel/types';
export const useAOS = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'linear',
    });
  }, []);
};
