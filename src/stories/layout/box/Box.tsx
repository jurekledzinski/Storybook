import { BoxProps } from './types';
import { getClassesBox } from './utils';
import {
  filterProps,
  spacingInlineStyles,
  spacingValues,
} from '@src/stories/helpers';

export const Box = ({ children, ...props }: BoxProps) => {
  const classes = getClassesBox(props);
  const spacingProps = filterProps(props, spacingValues, true);
  const inline = spacingInlineStyles(spacingProps);

  return (
    <div {...props} className={classes} style={inline}>
      {children}
    </div>
  );
};
