import styles from '../Container.module.css';
import stylesSpace from '@src/stories/styles/space.module.css';
import { ClassesContainer } from './types';
import { generateClassNames } from '@src/stories/helpers';

export const getClassesContainer: ClassesContainer = (params) => {
  const { m, mb, ml, mr, mt, maxWidth, p, pb, pl, pr, pt } = params;

  const mergedClasses = { ...styles, ...stylesSpace };

  return generateClassNames(mergedClasses, {
    container: true,
    [`${m}`]: Boolean(m),
    [`${mb}`]: Boolean(mb),
    [`${ml}`]: Boolean(ml),
    [`${mr}`]: Boolean(mr),
    [`${mt}`]: Boolean(mt),
    [`${maxWidth}`]: Boolean(maxWidth),
    [`${p}`]: Boolean(p),
    [`${pb}`]: Boolean(pb),
    [`${pl}`]: Boolean(pl),
    [`${pr}`]: Boolean(pr),
    [`${pt}`]: Boolean(pt),
  });
};
