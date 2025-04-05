import { Color } from '@src/stories/types';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export interface IconProps extends FontAwesomeIconProps {
  color?: Color | 'info';
}
