import { Header } from '@tanstack/react-table';
import { Icon } from '@src/stories/types';

export type SortArrowsProps<T> = {
  header: Header<T, unknown>;
  icons: Icon[];
};
