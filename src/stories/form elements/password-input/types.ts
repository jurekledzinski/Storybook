export type PasswordInputProps = {
  className?: 'startIcon' | 'endIcon';
  endIcon?: React.ReactNode;
  isPending?: boolean;
  startIcon?: React.ReactNode;
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
  label: string;
};
