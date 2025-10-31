export type Placement = 'left' | 'right' | 'top' | 'bottom';

export type FileInputContainerProps = {
  children: React.ReactNode;
  placement?: Placement;
};
