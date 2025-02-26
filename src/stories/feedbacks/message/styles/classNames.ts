import styles from './Message.module.css';
import { classNames } from '../../../helpers/classNames';
import { MessageProps } from '../types';

type Color = MessageProps['color'];

export const messageClassNames = (color: Color = 'error') => ({
  message: classNames(styles.message, styles[color]),
});
