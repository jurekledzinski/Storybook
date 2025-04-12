import { UseCloseOnClickOutsideProps } from './types/clickOutside';
import { useEffect } from 'react';

export const useCloseOnClickOutside = ({
  onClick,
  onLoadRefs,
}: UseCloseOnClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof Node)) return;
      const target = event.target as Node;

      const refs = onLoadRefs();

      const isClickOutside = Object.values(refs).some(
        (ref) => ref && ref.current && ref?.current?.contains(target)
      );

      if (!isClickOutside) onClick();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClick, onLoadRefs]);
};
