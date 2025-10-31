import { fileInputContainerClassNames } from '../../utils/classNames';
import { FileInputContainerProps } from './types';

export const FileInputContainer = ({
  children,
  placement,
}: FileInputContainerProps) => {
  const classNames = fileInputContainerClassNames(placement);

  return <div className={classNames}>{children}</div>;
};
