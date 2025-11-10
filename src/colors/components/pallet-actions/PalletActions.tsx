import styles from './PalletActions.module.css';
import { Box, Button, ButtonGroup } from '@src/stories';
import { faFileArrowDown, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { PalletActionsProps } from './types';

export const PalletActions = ({ onDownload, onSave }: PalletActionsProps) => {
  return (
    <Box className={styles.wrapper}>
      <ButtonGroup spacing="normal">
        <Button
          color="success"
          form="colors"
          iconEnd={[faFloppyDisk]}
          label="Save"
          onClick={onSave}
          variant="outlined"
        />
        <Button
          iconEnd={[faFileArrowDown]}
          label="Download"
          onClick={onDownload}
          variant="outlined"
        />
      </ButtonGroup>
    </Box>
  );
};
