export type TextInputProps = {
  endIcon?: React.ReactNode;
  isError?: boolean;
  isPending?: boolean;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  startIcon?: React.ReactNode;
  onClickEndIcon?: React.MouseEventHandler<HTMLSpanElement>;
  onClickStartIcon?: React.MouseEventHandler<HTMLSpanElement>;
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
  label: string;
  type: 'email' | 'number' | 'text';
};
