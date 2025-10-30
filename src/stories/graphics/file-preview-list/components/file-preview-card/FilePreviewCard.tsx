import { filePreviewCardClassNames } from '../../utils';
import { FilePreviewCardProps } from './types';

export const FilePreviewCard = ({
  children,
  placement,
}: FilePreviewCardProps) => {
  const classNames = filePreviewCardClassNames(placement);

  return <div className={classNames}>{children}</div>;
};
