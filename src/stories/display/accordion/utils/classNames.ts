import styles from '../Accordion.module.css';
import { AccordionContentClassNames, AccordionHeaderClassNames } from './types';
import { classNames, generateClassNames } from '@src/stories/helpers';

export const accordionHeaderClassNames: AccordionHeaderClassNames = (
  params
) => {
  const { className, color, size, variant } = params;

  return classNames(
    generateClassNames(styles, {
      header: true,
      [`${color}`]: Boolean(color),
      [`${size}`]: Boolean(size),
      [`${variant}`]: Boolean(variant),
    }),
    className ?? ''
  );
};

export const accordionContentClassNames: AccordionContentClassNames = (
  params
) => {
  const { className, open, size, variant } = params;

  return {
    content: generateClassNames(styles, {
      content: true,
      open: open,
      [`${size}`]: Boolean(size),
      [`${variant}`]: Boolean(variant),
    }),
    inner: classNames(className ?? ''),
  };
};
