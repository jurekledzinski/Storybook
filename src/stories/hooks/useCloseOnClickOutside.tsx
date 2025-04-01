import { useEffect } from 'react';
import { UseCloseOnClickOutsideProps } from './types/clickOutside';

export const useCloseOnClickOutside = ({
  onClick,
  refs,
}: UseCloseOnClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof Node)) return;

      const isNotClickOutside = Object.values(refs).some((item) =>
        item?.current?.contains(event.target as Node)
      );

      if (!isNotClickOutside) onClick();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClick, refs]);
};
