import { getClassNamesPaginationInfo } from '../../utils';
import { PaginationInfoProps } from './types';
import { usePaginationContext } from '../../context';

export const PaginationInfo = ({
  indexEnd,
  indexStart,
  totalAmount,
  ...props
}: PaginationInfoProps) => {
  const { infoEnd, infoStart, totalPages, ...rest } = usePaginationContext();
  const classes = getClassNamesPaginationInfo(rest);
  //totalPages to raczej powinno być totalRows tutaj cała ilość rows tzn. objektów w tablicy danych

  return (
    <div {...props} className={classes}>
      <span>{indexStart ?? infoStart}</span>
      <span>-</span>
      <span>{indexEnd ?? infoEnd}</span>
      <span>of</span>
      <span>{totalAmount ?? totalPages}</span>
    </div>
  );
};
