import { SelectProviderProps } from './types';
import { SelectContext } from './contextSelect';

export const SelectProvider = ({ children, ...props }: SelectProviderProps) => {
  return (
    <SelectContext.Provider value={props.value}>
      {children}
    </SelectContext.Provider>
  );
};
