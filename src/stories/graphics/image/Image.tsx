import styles from './Image.module.css';
import { ImageProps } from './types';

export const Image = ({ ...props }: ImageProps) => {
  return <img {...props} className={styles.image} />;
};
