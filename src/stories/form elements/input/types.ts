type BaseInputProps = {
  label: string;
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
};

export interface InputProps extends BaseInputProps {
  as: 'input';
  name?: string;
  ref?: React.LegacyRef<HTMLInputElement>;
  type: 'email' | 'number' | 'password' | 'text';
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface TextareaProps extends BaseInputProps {
  as: 'textarea';
  cols?: number;
  rows?: number;
  name?: string;
  ref?: React.LegacyRef<HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}
