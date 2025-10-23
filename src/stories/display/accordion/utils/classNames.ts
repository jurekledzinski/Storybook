import styles from '../Accordion.module.css';
import stylesSpace from '@src/stories/styles/space.module.css';
import { AccordionContentClassNames, AccordionHeaderClassNames } from './types';
import {
  classNames,
  generateClassNames,
  spacingClasses,
} from '@src/stories/helpers';

export const accordionHeaderClassNames: AccordionHeaderClassNames = (
  params
) => {
  const { color, size, variant, ...rest } = params;

  const spacing = spacingClasses(rest);
  const mergedStyles = { ...styles, ...stylesSpace };

  return generateClassNames(mergedStyles, {
    header: true,
    [`${color}`]: Boolean(color),
    [`${size}`]: Boolean(size),
    [`${variant}`]: Boolean(variant),
    ...spacing,
  });
};

export const accordionContentClassNames: AccordionContentClassNames = (
  params
) => {
  const { className, open, size, variant, ...rest } = params;

  const spacing = spacingClasses(rest);
  const mergedStyles = { ...styles, ...stylesSpace };

  return {
    content: classNames(
      generateClassNames(styles, {
        content: true,
        open: open,
        [`${size}`]: Boolean(size),
        [`${variant}`]: Boolean(variant),
      }),
      className ?? ''
    ),
    inner: generateClassNames(mergedStyles, {
      ...spacing,
    }),
  };
};
