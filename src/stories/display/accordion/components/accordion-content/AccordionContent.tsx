import { accordionContentClassNames } from '../../utils';
import { AccordionContentProps } from './types';
import { useAccordion } from '../../store';
import { useRef } from 'react';

export const AccordionContent = ({
  children,
  ...props
}: AccordionContentProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { open, variant } = useAccordion();

  const classNames = accordionContentClassNames({ open, variant, ...props });

  const maxHeight = open ? `${ref.current?.scrollHeight}px` : '0px';

  return (
    <div className={classNames} ref={ref} style={{ maxHeight }}>
      <div>{children}</div>
    </div>
  );
};
