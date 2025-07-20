import { SelectOptionProps } from './types';
import { useSelect } from '../../store';
import { selectOptionClassNames } from '../../utils';
import { useAriaAttributes } from '@src/stories/hooks';

export const SelectOption = ({ children, id }: SelectOptionProps) => {
  const { onChange, size, value } = useSelect();
  const { selectOptionA11y } = useAriaAttributes();

  const classes = selectOptionClassNames(id, value, size);

  return (
    <li
      className={classes.selectOption}
      onClick={() => onChange && onChange(id)}
      tabIndex={0}
      {...selectOptionA11y(id)}
    >
      {children}
    </li>
  );
};
