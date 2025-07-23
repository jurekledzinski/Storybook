import { FieldErrors } from 'react-hook-form';

export const checkIsError = <T extends object>(
  key: string,
  errors: FieldErrors<T>,
  dirty?: boolean
) => {
  const value = errors[key as keyof FieldErrors<T>];
  const isDirty = Boolean(dirty);

  const isError = value
    ? isDirty
      ? value
        ? true
        : false
      : value
      ? true
      : undefined
    : isDirty
    ? false
    : undefined;

  return isError;
};
