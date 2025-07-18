import { LoaderProps } from './types';
import { loaderClassNames } from './utils';

export const Loader = ({
  border,
  className,
  colorSpin,
  colorTrack,
  position,
  size,
}: LoaderProps) => {
  const classes = loaderClassNames({ border, className, position, size });

  return (
    <span
      className={classes}
      style={{
        ...(typeof size === 'number' ? { width: size, height: size } : {}),
        ...(colorTrack ? { borderColor: colorTrack } : {}),
        ...(colorSpin ? { borderTopColor: colorSpin } : {}),
      }}
    ></span>
  );
};
