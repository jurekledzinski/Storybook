import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import {
  Alert,
  AlertButton,
  AlertIcon,
  AlertMessage,
  Image,
  ImageContainer,
  Loader,
} from '@src/stories';

export const ImageLoader = () => {
  return (
    <ImageContainer loader="loader">
      {({ onLoad, onError, isLoading, isError }) => (
        <>
          {isLoading && <Loader position="element" />}
          {isError && (
            <Alert color="negative" variant="contained" fullWidth>
              <AlertIcon icon={faTriangleExclamation} color="negative" />
              <AlertMessage message="Failed to load image" />
              <AlertButton color="negative" variant="text" />
            </Alert>
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
