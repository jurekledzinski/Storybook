import { useEffect } from 'react';

type UseCloseOnClickOutsideProps = {
  onClick: () => void;
  ref: React.RefObject<HTMLElement>;
};

export const useCloseOnClickOutside = ({
  onClick,
  ref,
}: UseCloseOnClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClick, ref]);
};
