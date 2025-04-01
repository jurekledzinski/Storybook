import { useEffect } from 'react';
import { UseWindowResizeProps } from './types/resize';

export const useWindowResize = ({ onResize }: UseWindowResizeProps) => {
  useEffect(() => {
    onResize(document.documentElement);
    const handleResize = () => onResize(document.documentElement);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [onResize]);
};
