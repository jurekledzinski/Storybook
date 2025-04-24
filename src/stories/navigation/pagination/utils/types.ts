import { UiPagination } from '../types';

interface ParamsItem extends UiPagination {
  isActive?: boolean;
}

export type GetClassNamesPaginationItems = (params: ParamsItem) => {
  paginationArrow: string;
  paginationDots: string;
  paginationItem: string;
};

type ParamsPagination = Pick<UiPagination, 'spacing'>;

export type GetClassNamesPagination = (params: ParamsPagination) => string;
