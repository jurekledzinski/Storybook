import React from 'react';
import styles from './ValidationChecklist.module.css';
import { classNames } from '@src/stories/helpers';
import { Icons } from '@src/stories/types';
import { ValidationChecklistProps } from './types';

export const ValidationChecklist = ({
  children,
  className,
  icons,
  ...props
}: ValidationChecklistProps) => {
  const updatedChildren = React.Children.map(
    children,
    (child) => React.isValidElement<{ icons: Icons }>(child) && React.cloneElement(child, { icons })
  );

  return (
    <ul {...props} className={classNames(styles.list, className)}>
      {updatedChildren}
    </ul>
  );
};
