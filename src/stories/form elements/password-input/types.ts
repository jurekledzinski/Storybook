export type PasswordInputProps = {
  endIcon?: React.ReactNode;
  isError?: boolean;
  isPending?: boolean;
  startIcon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
  label: string;
};
