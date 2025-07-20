import { selectOptionClassNames } from '../../utils';
import { SelectOptionProps } from './types';
import { useAriaAttributes } from '@src/stories/hooks';
import { useSelect } from '../../store';

export const SelectOption = ({ children, id }: SelectOptionProps) => {
  const { onChange, size, value } = useSelect();
  const { selectOptionA11y } = useAriaAttributes();

  const classes = selectOptionClassNames(id, value, size);

  return (
    <li
      data-id={id}
      data-type="item"
      className={classes.selectOption}
      onClick={() => onChange && onChange(id)}
      tabIndex={0}
      {...selectOptionA11y(id)}
    >
      {children}
    </li>
  );
};
