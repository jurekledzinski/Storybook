import { SelectOptionProps } from './types';
import { useSelect } from '../../store';
import { selectOptionClassNames } from '../../utils';

export const SelectOption = ({ children, id }: SelectOptionProps) => {
  const { onChange, size, value } = useSelect();
  const classes = selectOptionClassNames(id, value, size);

  const onClick = () => onChange && onChange(id);

  return (
    <li className={classes.selectOption} id={id} onClick={onClick} tabIndex={0}>
      {children}
    </li>
  );
};
