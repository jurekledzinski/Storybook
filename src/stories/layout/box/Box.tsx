import { BoxProps } from './types';
import { getClassNamesBox } from './utils';
import {
  filterProps,
  spacingInlineStyles,
  spacingValues,
} from '@src/stories/helpers';

export const Box = ({ children, style, ...props }: BoxProps) => {
  const classes = getClassNamesBox(props);
  const spacingProps = filterProps(props, spacingValues, true);
  const inline = spacingInlineStyles(spacingProps);

  return (
    <div {...props} className={classes} style={{ ...style, ...inline }}>
      {children}
    </div>
  );
};
