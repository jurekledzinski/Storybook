import { useSelect } from '../../context/useSelect';
import { SelectOptionProps } from './types';
import styles from './SelectOption.module.css';
import { classNames } from '../../../../helpers/classNames';

export const SelectOption = ({ children, id }: SelectOptionProps) => {
  const { onChange, value } = useSelect();

  const classes = classNames(
    styles.selectOption,
    value === id ? styles.active : ''
  );

  return (
    <li className={classes} id={id} onClick={() => onChange && onChange(id)}>
      {children}
    </li>
  );
};
