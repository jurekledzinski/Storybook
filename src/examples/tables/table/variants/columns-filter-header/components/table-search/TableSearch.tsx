import { TableSearchProps } from './types';

export const TableSearch = ({
  onChange,
  value,
  ...props
}: TableSearchProps) => {
  return (
    <input
      {...props}
      type="text"
      onChange={onChange}
      value={value}
      style={{ padding: '0.25rem' }}
    />
  );
};
