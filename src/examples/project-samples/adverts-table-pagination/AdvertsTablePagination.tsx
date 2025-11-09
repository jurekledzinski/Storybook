import { AdvertsData } from '../adverts-table/types';
import {
  faAnglesLeft,
  faAnglesRight,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { AdvertsTable, useAdvertsColumns, useControlAdvertsTable } from '../adverts-table';

import { Pagination, PaginationArrow, PaginationInfo } from '@src/stories/navigation/pagination';

const stage = ['active', 'expired', 'expire soon'];

const adverts = Array.from<AdvertsData>({ length: 50 }).map((_, index) => ({
  id: index.toString(),
  title: `Bob Hello hello hello hello hello hello-${index}`,
  type: `Apartment-${index}`,
  stage: stage[Math.round(Math.random() * 2)],
  createdAt: Date.now() - Math.floor(Math.random() * 10000000000),
  actions: '',
}));

// Hooki idą do rodzica
// Stworzyć np. AdvertsPagination osobny komponent by tam była paginacja z tego komponentu

export const AdvertsTablePagination = () => {
  const columns = useAdvertsColumns();
  const { isEmpty, noResults, table } = useControlAdvertsTable({
    adverts,
    columns,
  });

  return (
    <AdvertsTable table={table} isEmpty={isEmpty} noResults={noResults} loading={false}>
      {(table) => {
        const currentPage = table.getState().pagination.pageIndex;
        const itemsPerPage = table.getState().pagination.pageSize;
        const amountData = table.getPrePaginationRowModel().rows.length;

        return (
          <Pagination
            size="size-sm"
            spacing="tight"
            totalPages={table.getPageCount()}
            variant="outlined"
          >
            <PaginationArrow
              id="first"
              label={faAnglesLeft}
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            />
            <PaginationArrow
              id="prev"
              label={faChevronLeft}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            />
            <PaginationInfo
              indexStart={currentPage * itemsPerPage + 1}
              indexEnd={Math.min((currentPage + 1) * itemsPerPage, amountData)}
              totalAmount={amountData}
            />
            <PaginationArrow
              id="next"
              label={faChevronRight}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            />
            <PaginationArrow
              id="last"
              label={faAnglesRight}
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            />
          </Pagination>
        );
      }}
    </AdvertsTable>
  );
};
