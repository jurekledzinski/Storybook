import { Alert, AlertIcon, AlertMessage } from '@src/stories/feedbacks/alert';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FilePreviewImageProps } from './types';
import { Image, ImageContainer } from '@src/stories/graphics/image';
import { useClearTimeout } from '@src/stories/hooks';
import { useObjectUrl } from '../../hooks';

export const FilePreviewImage = ({ file }: FilePreviewImageProps) => {
  const { handleCleanTimeout, timeId } = useClearTimeout();
  const url = useObjectUrl(file);

  return (
    <ImageContainer loader="skeleton">
      {({ onLoad, onError, isError, isLoading }) => (
        <>
          {isError && !isLoading ? (
            <Alert color="negative" fullWidth>
              <AlertIcon icon={faTriangleExclamation} />
              <AlertMessage message="Failed to load image" />
            </Alert>
          ) : (
            <Image
              alt="image"
              src={url}
              onError={onError}
              onLoad={() => {
                handleCleanTimeout();
                timeId.current = setTimeout(() => onLoad && onLoad(), 1000);
              }}
            />
          )}
        </>
      )}
    </ImageContainer>
  );
};
