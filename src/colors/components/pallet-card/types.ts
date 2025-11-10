import { ColorsContainerProps } from '@src/colors/types';

export interface PalletCardProps extends Omit<ColorsContainerProps, 'colorName'> {
  title: string;
  children?: React.ReactNode;
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
  colorName?: ColorsContainerProps['colorName'];
}
