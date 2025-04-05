import { ButtonGroupProps } from './types';
import { getClassButtonGroup } from './utils';

export const ButtonGroup = ({
  children,
  fullWidth = false,
  orientation = 'row',
  spacing = 'none',
  marginBottom,
  marginTop,
}: ButtonGroupProps) => {
  const classes = getClassButtonGroup(orientation, spacing, fullWidth);

  return (
    <div
      aria-label="Button group"
      className={classes}
      role="group"
      style={{ marginTop, marginBottom }}
    >
      {children}
    </div>
  );
};
