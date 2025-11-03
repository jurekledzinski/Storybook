import { selectOptionClassNames } from '../../utils';
import { SelectOptionProps } from './types';
import { useSelect } from '../../store';

export const SelectOption = ({ children, value: optionValue }: SelectOptionProps) => {
  const { innerValue, multiple, value, onSetValue } = useSelect();
  const classNames = selectOptionClassNames({ multiple, optionValue, value: value ?? innerValue });

  return (
    <li className={classNames} onClick={() => onSetValue && onSetValue(optionValue)}>
      {children}
    </li>
  );
};
