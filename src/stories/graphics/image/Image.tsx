import styles from './Image.module.css';
import { ImageProps } from './types';
import { useState } from 'react';

export const Image = ({ ...props }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  //   console.log('isLoading image', isLoading);
  //   console.log('isError image', isError);

  return (
    <img
      {...props}
      className={styles.image}
      onError={() => setIsError(true)}
      onLoad={() => setIsLoading(false)}
    />
  );
};
