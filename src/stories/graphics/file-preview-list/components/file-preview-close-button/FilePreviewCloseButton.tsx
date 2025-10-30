import styles from '../file-preview-card/FilePreviewCard.module.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FilePreviewCloseButtonProps } from './types';
import { IconButton } from '@src/stories/buttons/icon-button';

export const FilePreviewCloseButton = ({
  icon = faTrash,
  onClick,
}: FilePreviewCloseButtonProps) => {
  return (
    <IconButton
      className={styles.button}
      icon={[icon]}
      onClick={onClick}
      size="size-xxs"
      type="button"
      variant="minimal"
      color="negative"
    />
  );
};
