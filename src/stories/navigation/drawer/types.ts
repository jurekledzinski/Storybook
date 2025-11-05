export type DrawerProps = {
  children: React.ReactNode;
  className?: string;
  direction?: 'top' | 'right' | 'bottom' | 'left';
  gap?: number;
  open?: boolean;
  top?: number;
  variant?: 'overlay' | 'push' | 'pinned';
  width?: number;
  zIndex?: number;
};
