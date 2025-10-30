import { filePreviewListClassNames } from './utils';
import { FilePreviewListProps } from './types';

export const FilePreviewList = ({
  children,
  images,
  placement = 'grid',
  render,
}: FilePreviewListProps) => {
  const classNames = filePreviewListClassNames(placement);

  if (!render || !images.length) {
    return <div className={classNames}>{children}</div>;
  }

  return (
    <div className={classNames}>
      {images.map((file, index) => render(file, index, placement))}
    </div>
  );
};
