import { accordionHeaderClassNames } from '../../utils';
import { AccordionHeaderProps } from './types';
import { useAccordion } from '../../store';

export const AccordionHeader = ({
  children,
  ...props
}: AccordionHeaderProps) => {
  const { color, id, onClick, variant } = useAccordion();
  const classNames = accordionHeaderClassNames({ color, variant, ...props });

  return (
    <div
      className={classNames}
      id={id}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};
