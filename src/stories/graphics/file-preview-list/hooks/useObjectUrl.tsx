import { useEffect, useMemo, useRef } from 'react';
import { FileData } from '../types';

export const useObjectUrl = (file: File | FileData) => {
  const previousUrlRef = useRef<string | null>(null);

  const objectUrl = useMemo(() => {
    if (file && file instanceof File) return URL.createObjectURL(file);
    return file.url;
  }, [file]);

  useEffect(() => {
    if (previousUrlRef.current !== objectUrl) {
      previousUrlRef.current = objectUrl;
      return;
    }

    const copy = previousUrlRef.current;
    if (!copy) return;

    return () => URL.revokeObjectURL(copy);
  }, [objectUrl]);

  return objectUrl;
};
