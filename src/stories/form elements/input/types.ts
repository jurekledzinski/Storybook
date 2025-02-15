type BaseInputProps = {
  label: string;
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
};

export interface InputProps
  extends BaseInputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  as: 'input';
}

export interface TextareaProps
  extends BaseInputProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  as: 'textarea';
}
