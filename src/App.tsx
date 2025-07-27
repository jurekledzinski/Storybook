import {
  faAnglesLeft,
  faAnglesRight,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { ColumnsFilterTable } from './examples';
import './stories/main.css';
import {
  Pagination,
  PaginationArrow,
  PaginationInfo,
} from './stories/navigation/pagination';

const App = () => {
  return (
    <ColumnsFilterTable>
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
    </ColumnsFilterTable>
  );
};

export default App;
