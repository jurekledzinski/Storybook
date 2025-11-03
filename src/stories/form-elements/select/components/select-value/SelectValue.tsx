import { Chip } from '@src/stories/display';
import { SelectValueProps } from './types';

export const SelectValue = ({ placeholder, value, onDelete }: SelectValueProps) => {
  if (!value || !value.length) return placeholder;

  if (Array.isArray(value))
    return value.map((item) => (
      <Chip key={item} id={item} label={item} color="success" onDelete={onDelete} />
    ));
};
