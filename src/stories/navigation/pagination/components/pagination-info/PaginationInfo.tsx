import { getClassNamesPaginationInfo } from '../../utils';
import { PaginationInfoProps } from './types';

export const PaginationInfo = ({
  itemEnd,
  itemStart,
  totalItems,
  ...props
}: PaginationInfoProps) => {
  const classes = getClassNamesPaginationInfo(props);
  
  return (
    <div className={classes}>
      <span>{itemStart}</span>
      <span>-</span>
      <span>{itemEnd}</span>
      <span>of</span>
      <span>{totalItems}</span>
    </div>
  );
};
