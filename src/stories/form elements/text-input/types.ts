export type TextInputProps = {
  endIcon?: React.ReactNode;
  isError?: boolean;
  isPending?: boolean;
  startIcon?: React.ReactNode;
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
  label: string;
  type: 'email' | 'number' | 'text';
};
