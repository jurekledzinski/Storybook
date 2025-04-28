import { UiPagination } from '../types';

interface PaginationItemParams extends UiPagination {
  isActive?: boolean;
}

type PaginationParams = Pick<UiPagination, 'spacing'>;

export type GetClassNamesPaginationItems = (params: PaginationItemParams) => {
  paginationArrow: string;
  paginationItem: string;
};

export type GetClassNamesPagination = (params: PaginationParams) => string;

export type GetClassNamesPaginationInfo = (params: UiPagination) => string;
