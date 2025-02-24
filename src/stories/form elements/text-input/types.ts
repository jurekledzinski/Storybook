export type TextInputProps = {
  as: 'input' | 'textarea';
  disabled?: boolean;
  readOnly?: boolean;
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
