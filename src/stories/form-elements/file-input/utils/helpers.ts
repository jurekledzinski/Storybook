import { FileInputProps } from '../types';

type OmittedProps = 'allowTypes' | 'disabled' | 'maxAmount' | 'maxSize' | 'onError';

type CustomProps = Omit<FileInputProps, OmittedProps>;

export const getFileInputProps = (props: CustomProps) => {
  const {
    className,
    size = 'size-sm',
    variant = 'contained',
    label,
    iconStart,
    iconEnd,
    isLoading,
    fullWidth,
    color = 'primary',
    ...inputProps
  } = props;

  const buttonProps = {
    className,
    size,
    variant,
    label,
    iconStart,
    iconEnd,
    isLoading,
    fullWidth,
    color,
  };

  return { buttonProps, inputProps };
};
