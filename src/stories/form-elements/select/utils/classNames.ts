import stylesSelectOption from '../components/select-option/SelectOption.module.css';
import { classNames, generateClassNames } from '@src/stories/helpers';
import { Size } from '@src/stories/types';

export const selectOptionClassNames = (
  id: string,
  value?: string,
  size?: Size
) => ({
  selectOption: classNames(
    stylesSelectOption.selectOption,
    generateClassNames(stylesSelectOption, {
      active: value === id,
      [`${size}`]: Boolean(size),
    })
  ),
});
