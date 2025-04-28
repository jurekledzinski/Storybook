import { getClassNamesPaginationInfo } from '../../utils';
import { PaginationInfoProps } from './types';
import { usePaginationContext } from '../../context';

export const PaginationInfo = ({ ...props }: PaginationInfoProps) => {
  const { infoEnd, infoStart, totalPages, ...rest } = usePaginationContext();
  const classes = getClassNamesPaginationInfo(rest);

  return (
    <div {...props} className={classes}>
      <span>{infoStart}</span>
      <span>-</span>
      <span>{infoEnd}</span>
      <span>of</span>
      <span>{totalPages}</span>
    </div>
  );
};
