import { messageClassNames } from './styles/classNames';
import { MessageProps } from './types';

export const Message = ({ variant = 'error', message }: MessageProps) => {
  const classes = messageClassNames(variant);
  const role =
    variant === 'warning' || variant === 'error' ? 'alert' : 'status';

  return (
    <p className={classes.message} role={role}>
      {message}
    </p>
  );
};
