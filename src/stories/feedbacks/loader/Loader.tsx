import { LoaderProps } from './types';
import { loaderClassNames } from './utils';

export const Loader = ({
  border,
  colorSpin,
  colorTrack,
  position,
  size,
  sizeSchema,
}: LoaderProps) => {
  const classes = loaderClassNames({ border, position, sizeSchema });

  return (
    <span
      className={classes}
      {...(size || colorSpin || colorTrack
        ? {
            style: {
              width: size,
              height: size,
              ...(colorTrack ? { borderColor: colorTrack } : {}),
              ...(colorSpin ? { borderTopColor: colorSpin } : {}),
            },
          }
        : {})}
    ></span>
  );
};
