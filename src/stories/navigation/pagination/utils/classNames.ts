import stylesPagination from '../Pagination.module.css';
// import stylesItem from '../components/pagination-item/PaginationItem.module.css';
// import stylesArrow from '../components/pagination-arrow/PaginationArrow.module.css';
import styles from '../styles/Styles.module.css';

import { generateClassNames } from '@src/stories/helpers';
import { GetClassNamesPagination, GetClassNamesPaginationItems } from './types';

export const getClassNamesPagination: GetClassNamesPagination = (params) => {
  const { spacing } = params;

  return generateClassNames(stylesPagination, {
    pagination: true,
    [`${spacing}`]: Boolean(spacing),
  });
};

export const getClassNamesPaginationItems: GetClassNamesPaginationItems = (
  params
) => {
  const { color, isActive, size, spacing, variant } = params;

  return {
    paginationArrow: generateClassNames(styles, {
      button: true,
      [`${color}`]: Boolean(color),
      [`${size}`]: Boolean(size),
      [`${spacing}`]: Boolean(spacing),
      [`${variant}`]: Boolean(variant),
    }),
    paginationDots: generateClassNames(styles, {
      button: true,
      [`${color}`]: Boolean(color),
      [`${size}`]: Boolean(size),
      [`${spacing}`]: Boolean(spacing),
      [`${variant}`]: Boolean(variant),
    }),
    paginationItem: generateClassNames(styles, {
      button: true,
      [`active`]: Boolean(isActive),
      [`${color}`]: Boolean(color),
      [`${size}`]: Boolean(size),
      [`${spacing}`]: Boolean(spacing),
      [`${variant}`]: Boolean(variant),
    }),
  };
};
