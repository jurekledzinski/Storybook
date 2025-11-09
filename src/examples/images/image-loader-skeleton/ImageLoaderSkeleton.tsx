import { Alert, AlertButton, AlertIcon, AlertMessage, Image, ImageContainer } from '@src/stories';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

// aspect-ratio: 1 / 1; jako kwadrat będzie i możliwe że wtedy trzeba też dać to samo na Image
// jeśli ma być kwadrat

export const ImageLoaderSkeleton = () => {
  return (
    <ImageContainer loader="skeleton" style={{ aspectRatio: '1/1' }}>
      {({ onLoad, onError, isError, isLoading }) => (
        <>
          {isError && !isLoading ? (
            <Alert color="negative" variant="contained" fullWidth>
              <AlertIcon icon={faTriangleExclamation} color="negative" />
              <AlertMessage message="Failed to load image" />
              <AlertButton color="negative" variant="text" />
            </Alert>
          ) : (
            <Image
              src="https://cdn.pixabay.com/photo/2025/06/10/11/21/view-9651981_1280.jpg"
              onLoad={onLoad}
              onError={onError}
            />
          )}
        </>
      )}
    </ImageContainer>
  );
};
