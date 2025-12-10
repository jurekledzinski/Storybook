import { Validate } from 'react-hook-form';

export type InputsValidateBlocksForm = {
  password: string;
  confirm: string;
};

export const passwordRules: Record<string, Validate<string, InputsValidateBlocksForm>> = {
  hasNoSpace: (v) => /^\S*$/.test(v) || 'Must not contain spaces',
  minLength: (v) => v.length >= 8 || '',
  hasNumber: (v) => /\d/.test(v) || '',
  hasUppercase: (v) => /[A-Z]/.test(v) || '',
  hasLowercase: (v) => /[a-z]/.test(v) || '',
  hasSpecial: (v) => /[@#!]/.test(v) || '',
};

export const confirmRules: Record<string, Validate<string, InputsValidateBlocksForm>> = {
  sameValues: (_, rest) => rest.password === rest.confirm || 'Passwords do not match',
};
