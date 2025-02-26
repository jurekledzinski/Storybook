import { messageClassNames } from './styles/classNames';
import { MessageProps } from './types';

export const Message = ({ color, message }: MessageProps) => {
  const classes = messageClassNames(color);

  return <p className={classes.message}>{message}</p>;
};
