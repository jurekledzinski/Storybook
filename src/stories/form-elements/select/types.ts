export type SelectProps = {
  children?: React.ReactNode;
  multiple?: boolean;
  onChange?: (value: string) => void;
  value?: string | string[];
};
