import { capitalizeFirstLetter } from '@src/stories/helpers';
import { SelectDisplayProps } from './types';
import { useCloseOnClickOutside } from '@src/stories/hooks';
import { usePopOver } from '@src/stories/overlays/popover';
import { useRef } from 'react';
import {
  getClassNamesInput,
  InputWrapper,
  InputWrapperIconsRef,
} from '@src/stories/form-elements/input';

export const SelectDisplay = ({ endIcon }: SelectDisplayProps) => {
  const childsRef = useRef<InputWrapperIconsRef>(null);
  const fieldsetRef = useRef<HTMLFieldSetElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { isError, isOpen, label, onOpen, size, variant, value } = usePopOver();

  useCloseOnClickOutside({
    onClick: () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => onOpen && onOpen(false), 100);
    },
    onLoadRefs: () => ({ fieldsetRef, ...childsRef.current }),
  });

  const classes = getClassNamesInput({ variant, size, isError });

  return (
    <InputWrapper
      endIcon={isOpen ? endIcon[0] : endIcon[1]}
      isError={isError}
      onClickEndIcon={() => onOpen && onOpen(true)}
      ref={childsRef}
      size={size}
      variant={variant}
      divider={true}
    >
      <fieldset
        ref={fieldsetRef}
        className={classes.fieldset}
        onClick={() => onOpen && onOpen(true)}
      >
        <input
          className={classes.input}
          type="text"
          readOnly={true}
          value={capitalizeFirstLetter(value)}
        />
        {variant !== 'basic' && (
          <legend className={classes.legend}>{label}</legend>
        )}
      </fieldset>
    </InputWrapper>
  );
};
