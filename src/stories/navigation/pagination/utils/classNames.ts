import stylesPagination from '../Pagination.module.css';
import stylesPaginationInfo from '../components/pagination-info/styles/Styles.module.css';
// import stylesItem from '../components/pagination-item/PaginationItem.module.css';
// import stylesArrow from '../components/pagination-arrow/PaginationArrow.module.css';
import styles from '../styles/Styles.module.css';

import { generateClassNames } from '@src/stories/helpers';

import {
  GetClassNamesPagination,
  GetClassNamesPaginationInfo,
  GetClassNamesPaginationItems,
} from './types';

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
  const { border, color, isActive, radius, size, spacing, variant } = params;

  return {
    paginationArrow: generateClassNames(styles, {
      button: true,
      [`${border}`]: Boolean(border),
      [`${color}`]: Boolean(color),
      [`${radius}`]: Boolean(radius),
      [`${size}`]: Boolean(size),
      [`${spacing}`]: Boolean(spacing),
      [`${variant}`]: Boolean(variant),
    }),
    paginationDots: generateClassNames(styles, {
      button: true,
      [`${border}`]: Boolean(border),
      [`${color}`]: Boolean(color),
      [`${radius}`]: Boolean(radius),
      [`${size}`]: Boolean(size),
      [`${spacing}`]: Boolean(spacing),
      [`${variant}`]: Boolean(variant),
    }),
    paginationItem: generateClassNames(styles, {
      button: true,
      [`${border}`]: Boolean(border),
      [`active`]: Boolean(isActive),
      [`${color}`]: Boolean(color),
      [`${radius}`]: Boolean(radius),
      [`${size}`]: Boolean(size),
      [`${spacing}`]: Boolean(spacing),
      [`${variant}`]: Boolean(variant),
    }),
  };
};

export const getClassNamesPaginationInfo: GetClassNamesPaginationInfo = (
  params
) => {
  const { border, color, radius, size, spacing, variant } = params;

  return generateClassNames(stylesPaginationInfo, {
    info: true,
    [`${border}`]: Boolean(border),
    [`${color}`]: Boolean(color),
    [`${radius}`]: Boolean(radius),
    [`${size}`]: Boolean(size),
    [`${spacing}`]: Boolean(spacing),
    [`${variant}`]: Boolean(variant),
  });
};
