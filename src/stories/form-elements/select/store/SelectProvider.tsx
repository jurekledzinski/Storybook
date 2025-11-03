import { SelectContext } from './contextSelect';
import { SelectProviderProps } from './types';
import { useMemo } from 'react';
import { useSelectOption } from '../hooks';

export const SelectProvider = ({ children, ...props }: SelectProviderProps) => {
  const ctx = useSelectOption({ ...props.value });
  const values = useMemo(() => ({ ...props.value, ...ctx }), [ctx, props.value]);

  return <SelectContext.Provider value={values}>{children}</SelectContext.Provider>;
};
