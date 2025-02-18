export type PasswordInputProps = {
  className?: 'startIcon' | 'endIcon';
  endIcon?: React.ReactNode;
  isPending?: boolean;
  startIcon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
  label: string;
};
