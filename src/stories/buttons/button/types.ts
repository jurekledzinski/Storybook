export type ButtonProps = {
  border?: 'border-xs' | 'border-sm' | 'border-md' | 'border-lg' | 'border-xl';
  radius?:
    | 'radius-xs'
    | 'radius-sm'
    | 'radius-md'
    | 'radius-lg'
    | 'radius-xl'
    | 'radius-x2'
    | 'radius-x3'
    | 'radius-full';
  disabled?: boolean;
  href?: string;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'success' | 'negative' | 'warning';
  variant?: 'contained' | 'outlined' | 'text';
};
