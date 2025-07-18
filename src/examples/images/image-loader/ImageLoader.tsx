import { Alert } from '@src/stories/feedbacks/alert';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Image, ImageContainer } from '@src/stories/graphics/image';
import { Loader } from '@src/stories/feedbacks/loader';

export const ImageLoader = () => {
  return (
    <ImageContainer loader="loader">
      {({ onLoad, onError, isLoading, isError }) => (
        <>
          {isLoading && <Loader position="element" />}
          {isError && (
            <Alert
              color="negative"
              icon={faTriangleExclamation}
              message="Failed to load image"
              fullWidth
              size="size-xs"
            />
          )}
          <Image
            src="https://cdn.pixabay.com/photo/2025/06/10/11/21/view-9651981_1280.jpg"
            onLoad={onLoad}
            onError={onError}
          />
        </>
      )}
    </ImageContainer>
  );
};
