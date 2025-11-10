import { Box } from '@src/stories';
import { palletBoxClassNames } from '@src/colors/utils';
import { PalletBoxProps } from './types';

export const PalletBox = ({ children, index }: PalletBoxProps) => {
  const classNames = palletBoxClassNames(index);

  return <Box className={classNames}>{children}</Box>;
};
