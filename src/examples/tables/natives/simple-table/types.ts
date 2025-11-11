type DefaultProps = {
  children?: React.ReactNode;
  className?: string;
};

interface LoadingProps extends DefaultProps {
  isEmpty?: boolean;
  isLoading?: boolean;
}

export type SimpleTableProps = {
  elementEmpty?: React.ComponentType<DefaultProps>;
  elementLoading?: React.ComponentType<LoadingProps>;
  isLoading?: boolean;
};
