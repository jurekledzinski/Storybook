import styles from './ModalFooter.module.css';
import { Button } from '@src/stories/buttons/button';
import { ModalFooterProps } from './types';

export const ModalFooter = ({
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  isPending,
  onCancel,
  onConfirm,
  type = 'button',
  color,
}: ModalFooterProps) => {
  return (
    <footer className={styles.footer}>
      <Button
        label={cancelText!}
        variant="outlined"
        color="secondary"
        onClick={onCancel}
        size="size-xs"
      />

      <Button
        label={confirmText}
        variant="contained"
        color={color}
        onClick={onConfirm}
        type={type}
        size="size-xs"
        isLoading={isPending}
      />
    </footer>
  );
};
