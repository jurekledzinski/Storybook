export type PasswordInputProps = {
  disabled?: boolean;
  readOnly?: boolean;
  endIcon?: React.ReactNode;
  isError?: boolean;
  isPending?: boolean;
  startIcon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
  label: string;
};
