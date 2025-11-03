import { DeleteButtonProps } from './types';

export const DeleteButton = ({ children, onDelete, ...props }: DeleteButtonProps) => {
  return (
    <span role="button" {...props} onClick={onDelete}>
      {children}
    </span>
  );
};
