import { FiledProps } from './types';
import { getClassNamesField } from './utils';

export const Field = ({ className, gap, children }: FiledProps) => {
  const classes = getClassNamesField({ className, gap });

  console.log('classes', classes);

  return <div className={classes}>{children}</div>;
};
