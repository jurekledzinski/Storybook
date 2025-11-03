import { forwardRef, Ref } from 'react';
import { controlLayoutClassNames } from './utils';
import { ControlLayoutProps } from './types';
import { ControlLayoutProvider } from './store';

export const ControlLayout = forwardRef<HTMLDivElement, ControlLayoutProps>(
  ({ children, ...props }, ref: Ref<HTMLDivElement>) => {
    const classNames = controlLayoutClassNames(props);

    return (
      <ControlLayoutProvider value={props}>
        <div className={classNames} ref={ref}>
          {children}
        </div>
      </ControlLayoutProvider>
    );
  }
);

ControlLayout.displayName = 'ControlLayout';
