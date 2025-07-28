type DefaultProps = {
  children?: React.ReactNode;
  className?: string;
};

export type SimpleTableProps = {
  elementEmpty?: React.ComponentType<DefaultProps>;
  elementLoading?: React.ComponentType<DefaultProps>;
  elementNoResults?: React.ComponentType<DefaultProps>;
  isLoading?: boolean;
};
