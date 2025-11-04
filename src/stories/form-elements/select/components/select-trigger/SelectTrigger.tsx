import { ControlLayout, IconEnd, IconLoader, IconStart } from '@src/stories/layout';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { forwardRef } from 'react';
import { SelectButton } from '../select-button';
import { SelectTriggerProps } from './types';
import { SelectValue } from '../select-value';
import { useSelectTrigger } from '../../hooks';

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  (
    {
      endIcon = [faChevronDown, faChevronUp],
      isPending,
      startIcon,
      placeholder = 'Select option',
      ...props
    },
    ref
  ) => {
    const { isOpen, handleClick, handleDelete, handleRef, value } = useSelectTrigger('root');

    return (
      <ControlLayout
        {...props}
        as="input"
        isPending={isPending}
        isEndIcon={!!endIcon || props.isError !== undefined}
        isStartIcon={!!startIcon}
        ref={handleRef}
        onClick={handleClick}
      >
        {startIcon ? <IconStart icon={startIcon} tabIndex={-1} /> : null}

        <SelectButton {...props} placeholder={placeholder} value={value} ref={ref}>
          <SelectValue placeholder={placeholder} value={value} onDelete={handleDelete} />
        </SelectButton>

        <IconLoader />

        {isOpen ? (
          <IconEnd icon={endIcon[1]} tabIndex={-1} />
        ) : (
          <IconEnd icon={endIcon[0]} tabIndex={-1} />
        )}
      </ControlLayout>
    );
  }
);

SelectTrigger.displayName = 'SelectTrigger';
