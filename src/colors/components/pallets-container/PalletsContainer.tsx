import styles from './PalletsContainer.module.css';
import { Box } from '@src/stories';
import { PalletsContainerProps } from './types';

export const PalletsContainer = ({ children, ...props }: PalletsContainerProps) => {
  return (
    <Box {...props} className={styles.container}>
      {children}
    </Box>
  );
};
