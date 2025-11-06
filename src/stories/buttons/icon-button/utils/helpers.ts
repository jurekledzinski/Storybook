import { IconButtonParams, IconLinkButtonParams } from './types';

export const formatIconButtonProps = ({
  border,
  className,
  color,
  disabled,
  fullWidth,
  isLoading,
  radius,
  size,
  variant,
  contrast,
  ...rest
}: IconButtonParams | IconLinkButtonParams) => {
  const button = {
    border,
    className,
    color,
    contrast,
    disabled,
    isLoading,
    fullWidth,
    radius,
    size,
    variant,
  };
  return { button, rest };
};
