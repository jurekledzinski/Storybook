import { Loader } from '@src/stories/feedbacks/loader';
import { LoaderIconProps } from './types';

export const LoaderIcon = ({ className, size }: LoaderIconProps) => {
  return (
    <span className={className}>
      <Loader sizeSchema={`inner-${size!}`} />
    </span>
  );
};
