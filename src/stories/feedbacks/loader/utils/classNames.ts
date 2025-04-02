import styles from '../Loader.module.css';
import { classNames } from '@src/stories/helpers';
import { LoaderProps } from '../types';

export const loaderClassNames = (
  params: Pick<LoaderProps, 'border' | 'position' | 'sizeSchema'>
) => {
  const { border, position, sizeSchema } = params;
  return classNames(
    styles.loader,
    styles[sizeSchema as keyof typeof styles],
    styles[position as keyof typeof styles],
    styles[border as keyof typeof styles]
  );
};
