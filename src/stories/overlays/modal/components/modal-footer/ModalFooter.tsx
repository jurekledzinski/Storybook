import { Button } from '../../../../buttons/button/Button';
import { modalFooterClassNames } from '../../utils/classNames';
import { ModalFooterProps } from './types';
// import { mapVariantToColor } from '../../utils/mapVariantToColor ';

export const ModalFooter = ({
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
  type,
  variant,
}: ModalFooterProps) => {
  const classes = modalFooterClassNames();

  return (
    <footer className={classes.footer}>
      <Button
        label={cancelText!}
        variant="outlined"
        color="secondary"
        onClick={onCancel}
      />

      <Button
        label={confirmText}
        variant="contained"
        // color={mapVariantToColor(variant!)}
        color={variant}
        onClick={onConfirm}
        type={type}
      />
    </footer>
  );
};
