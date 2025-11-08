import { Icon } from '@src/stories/graphics/icon';
import { IconButtonContentProps } from './types';
import { Loader } from '@src/stories/feedbacks/loader';

export const IconButtonContent = ({ icon, isLoading, size }: IconButtonContentProps) => {
  return (
    <>
      {isLoading ? (
        <>
          <Loader position="element" size={size} />
          <Icon icon={icon[0]} size="1x" />
        </>
      ) : (
        <>{icon ? <Icon icon={icon[0]} size="1x" /> : null}</>
      )}
    </>
  );
};
