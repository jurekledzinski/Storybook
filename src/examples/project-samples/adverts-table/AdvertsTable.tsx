import styles from './AdvertsTable.module.css';
import { AdvertsData, AdvertsTableTableProps } from './types';
import { ColumnsFilterBody, ColumnsFilterHeader } from './components';
import {
  Table,
  TableBody,
  TableHeader,
  TableStatus,
  TableState,
} from '@src/examples/tables/natives';

export const AdvertsTable = ({
  children,
  isEmpty,
  loading,
  noResults,
  table,
  emptyMessage = 'No data available',
  noResultsMessage = 'No results match your filter',
}: AdvertsTableTableProps<AdvertsData>) => {
  console.log('Render table');
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperTable}>
        <div className={styles.wrapperContent}>
          <Table>
            <TableHeader table={table}>
              <ColumnsFilterHeader />
            </TableHeader>

            <TableBody table={table}>
              <ColumnsFilterBody />
              <TableStatus isEmpty={isEmpty} isLoading={loading} />
            </TableBody>
          </Table>

          {!isEmpty && <TableState>{emptyMessage}</TableState>}
          {!noResults && isEmpty && <TableState>{noResultsMessage}</TableState>}
        </div>
      </div>
      <div className={styles.wrapperPagination}>
        {children && typeof children === 'function' ? children(table) : null}
      </div>
    </div>
  );
};
