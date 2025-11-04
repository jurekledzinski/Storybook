import styles from '../Container.module.css';
import { classNames, generateClassNames } from '@src/stories/helpers';
import { ContainerClassNames } from './types';

export const containerClassNames: ContainerClassNames = (params) => {
  const { className } = params;

  return classNames(generateClassNames(styles, { container: true }), className ?? '');
};
