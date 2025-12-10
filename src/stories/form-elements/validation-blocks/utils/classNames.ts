import styles from '../components/validation-block/ValidationBlock.module.css';
import { generateClassNames } from '@src/stories/helpers';
import { ValidationBlockClassNames } from './types';

export const validationBlockClassNames: ValidationBlockClassNames = ({ color, isValid }) => {
  return generateClassNames(styles, { block: true, [color]: !!color, isValid: isValid });
};
