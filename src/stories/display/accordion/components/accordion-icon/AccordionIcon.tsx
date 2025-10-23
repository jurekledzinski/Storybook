import styles from '../../Accordion.module.css';
import { AccordionIconProps } from './types';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@src/stories/graphics/icon';
import { useAccordion } from '../../store';

export const AccordionIcon = ({
  icons = [faChevronUp, faChevronDown],
}: AccordionIconProps) => {
  const context = useAccordion();

  return (
    <span className={styles.icon}>
      {context.open ? <Icon icon={icons[0]} /> : <Icon icon={icons[1]} />}
    </span>
  );
};
