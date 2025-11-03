import { ControlLayout, IconEnd, IconLoader, IconStart } from '@src/stories/layout';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { forwardRef } from 'react';
import { SelectButton } from '../select-button';
import { SelectTriggerProps } from './types';
import { SelectValue } from '../select-value';
import { useSelectTrigger } from '../../hooks';

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ endIcon = [faChevronDown, faChevronUp], isPending, startIcon, ...props }, ref) => {
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
        {startIcon ? <IconStart icon={startIcon} /> : null}

        <SelectButton {...props} ref={ref}>
          <SelectValue
            placeholder={props.label ?? 'Select option'}
            value={value}
            onDelete={handleDelete}
          />
        </SelectButton>

        <IconLoader />

        {isOpen ? <IconEnd icon={endIcon[1]} /> : <IconEnd icon={endIcon[0]} />}
      </ControlLayout>
    );
  }
);

SelectTrigger.displayName = 'SelectTrigger';
