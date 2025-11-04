import { BoxClassNames } from './types';
import { classNames } from '@src/stories/helpers';

export const boxClassNames: BoxClassNames = (params) => {
  const { className } = params;

  return classNames(className ?? '');
};
