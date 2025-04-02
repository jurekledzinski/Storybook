import stylesSelectOption from '../components/select-option/SelectOption.module.css';
import { classNames } from '@src/stories/helpers';

export const selectOptionClassNames = (id: string, value?: string) => ({
  selectOption: classNames(
    stylesSelectOption.selectOption,
    value === id ? stylesSelectOption.active : ''
  ),
});
