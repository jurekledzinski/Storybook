import styles from './CardFilePreview.module.css';
import { Alert } from '@src/stories/feedbacks/alert';
import { CardFilePreviewProps } from './types';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { getClassNamesCardFilePreview } from '../../utils';
import { Image, ImageContainer } from '@src/stories/graphics/image';
import { useObjectUrl } from './hooks';

export const CardFilePreview = ({
  file,
  index,
  onRemove,
  gridPlacement,
}: CardFilePreviewProps) => {
  const classes = getClassNamesCardFilePreview(gridPlacement);
  const objectUrl = useObjectUrl(file);

  return (
    <div className={classes.card}>
      <ImageContainer loader="skeleton">
        {({ onLoad, onError, isError, isLoading }) => (
          <>
            {isError && !isLoading ? (
              <Alert
                color="negative"
                icon={faTriangleExclamation}
                message="Failed to load image"
                fullWidth
                size="size-xs"
              />
            ) : (
              <Image
                src={objectUrl}
                onLoad={() => setTimeout(() => onLoad && onLoad(), 1000)}
                onError={onError}
                alt="image"
              />
            )}
          </>
        )}
      </ImageContainer>
      <p className={classes.title}>{file.name}</p>
      <button className={styles.button} onClick={() => onRemove(index)}>
        x
      </button>
    </div>
  );
};
