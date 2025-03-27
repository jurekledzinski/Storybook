export type SelectPanelProps<T> =
  | { children?: React.ReactNode }
  | { children: (item: T) => React.ReactNode };
