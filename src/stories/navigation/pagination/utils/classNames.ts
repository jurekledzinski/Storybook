import styles from '../styles/Styles.module.css';
import stylesPagination from '../Pagination.module.css';
import { generateClassNames } from '@src/stories/helpers';
import { PaginationClassNames, PaginationCommonClassNames } from './types';

export const paginationClassNames: PaginationClassNames = (params) => {
  const { spacing } = params;

  return generateClassNames(stylesPagination, {
    pagination: true,
    [`${spacing}`]: Boolean(spacing),
  });
};

export const paginationCommonClassNames: PaginationCommonClassNames = (params) => {
  const { border, className, color, isActive, radius, size, spacing, variant } = params;

  return generateClassNames(styles, {
    [className]: true,
    [`active`]: Boolean(isActive),
    [`${border}`]: Boolean(border),
    [`${color}`]: Boolean(color),
    [`${radius}`]: Boolean(radius),
    [`${size}`]: Boolean(size),
    [`${spacing}`]: Boolean(spacing),
    [`${variant}`]: Boolean(variant),
  });
};
