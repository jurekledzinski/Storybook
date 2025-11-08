import styles from '../styles/Styles.module.css';
import stylesPagination from '../Pagination.module.css';
import { classNames, generateClassNames } from '@src/stories/helpers';
import { PaginationClassNames, PaginationCommonClassNames } from './types';

export const paginationClassNames: PaginationClassNames = (params) => {
  const { spacing } = params;

  return generateClassNames(stylesPagination, {
    pagination: true,
    [`${spacing}`]: Boolean(spacing),
  });
};

export const paginationCommonClassNames: PaginationCommonClassNames = (params) => {
  const { className, color, isActive, size, spacing, type, variant } = params;

  return classNames(
    generateClassNames(styles, {
      [type]: true,
      [`active`]: Boolean(isActive),
      [`${color}`]: Boolean(color),
      [`${size}`]: Boolean(size),
      [`${spacing}`]: Boolean(spacing),
      [`${variant}`]: Boolean(variant),
    }),
    className ?? ''
  );
};
