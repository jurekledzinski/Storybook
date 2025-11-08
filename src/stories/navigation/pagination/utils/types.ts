import { Spacing } from '@src/stories/types';
import { UiPagination } from '../types';

export interface PaginationItemParams extends UiPagination {
  type: string;
  isActive?: boolean;
}

export type PaginationCommonClassNames = (params: PaginationItemParams) => string;

export type PaginationClassNames = (params: { spacing?: Spacing }) => string;
