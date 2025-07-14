import stylesSelectOption from '../components/select-option/SelectOption.module.css';
import { generateClassNames } from '@src/stories/helpers';
import { Size } from '@src/stories/types';

export const selectOptionClassNames = (
  id: string,
  value?: string,
  size?: Size
) => ({
  selectOption: generateClassNames(stylesSelectOption, {
    active: value === id,
    ['select-option']: true,
    [`${size}`]: Boolean(size),
  }),
});
