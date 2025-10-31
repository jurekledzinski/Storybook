import { InputWrapperContext } from './contextInputWrapper';
import { InputWrapperProviderProps } from './types';
import { useMemo } from 'react';

export const InputWrapperProvider = ({
  children,
  value,
}: InputWrapperProviderProps) => {
  const values = useMemo(() => value, [value]);

  return (
    <InputWrapperContext.Provider value={values}>
      {children}
    </InputWrapperContext.Provider>
  );
};
