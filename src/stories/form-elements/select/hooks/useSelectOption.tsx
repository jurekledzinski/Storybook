import { UseSelectOptionProps } from './types';
import { useState } from 'react';

export const useSelectOption = ({ multiple, onChange, value }: UseSelectOptionProps) => {
  const [innerValue, setInnerValue] = useState<string | string[]>();

  const onSetValue = (newValue: string) => {
    if (value === undefined) {
      if (multiple) {
        setInnerValue((prev) => {
          if (prev && Array.isArray(prev) && prev.includes(newValue)) {
            return prev.filter((i) => i !== newValue);
          }
          return prev ? [...prev, newValue] : [newValue];
        });
      } else {
        setInnerValue(newValue);
      }
    }

    if (onChange || value !== undefined) onChange?.(newValue);
  };

  return { innerValue, onSetValue };
};
