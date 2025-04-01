import { useEffect } from 'react';
import { UseResizeObserverProps } from './types/resize';

export const useResizeObserver = ({
  ref,
  onResize,
}: UseResizeObserverProps) => {
  useEffect(() => {
    if (!ref?.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const rect = entry.target.getBoundingClientRect();
        onResize(rect);
      }
    });

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref, onResize]);
};
