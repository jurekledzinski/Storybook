import { Variant } from '../components/modal-header/types';

export const mapVariantToColor = (variant: Variant) => {
  return variant === 'info' || variant === 'neutral'
    ? 'primary'
    : variant === 'delete'
    ? 'negative'
    : variant;
};
