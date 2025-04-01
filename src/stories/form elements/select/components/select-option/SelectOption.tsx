import { selectOptionClassNames } from '../../utils/classNames';
import { SelectOptionProps } from './types';
import { usePopOver } from '../../../../overlays/popover/context/usePopOver';

export const SelectOption = ({ children, id }: SelectOptionProps) => {
  const { onChange, value, onOpen } = usePopOver();

  const classes = selectOptionClassNames(id, value);

  const onClick = () => onChange && onChange(id);

  return (
    <li
      className={classes.selectOption}
      id={id}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.code === 'Enter' && onOpen) {
          onClick();
          onOpen(false);
        }
        if (e.code === 'Escape' && onOpen) onOpen(false);
      }}
      tabIndex={0}
    >
      {children}
    </li>
  );
};
