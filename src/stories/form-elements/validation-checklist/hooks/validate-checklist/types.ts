import { Validate } from 'react-hook-form';

export type CheckListProps<T> = {
  formValues: T;
  mapRules: Record<string, Validate<string, T>>;
  value: string;
};
