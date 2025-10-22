import { ButtonParams, LinkButtonParams } from './types';

export const formatProps = ({
  border,
  color,
  disabled,
  fullWidth,
  isLoading,
  radius,
  size,
  variant,
  ...rest
}: ButtonParams | LinkButtonParams) => {
  const button = {
    border,
    color,
    disabled,
    isLoading,
    fullWidth,
    radius,
    size,
    variant,
  };
  return { button, rest };
};
