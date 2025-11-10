import styles from './Colors.module.css';
import { ColorsContainerProps } from './types';
import { Container } from '@src/stories';
import { PalletActions } from './components/pallet-actions/PalletActions';
import { PalletBoxes, PalletCard, PalletsContainer } from './components';
import { useColors } from './hooks';

export const ColorsContainer = ({ colorName, ...props }: ColorsContainerProps) => {
  const { colorVariables, onDelete, onDownload, onSave } = useColors({ colorName, ...props });

  return (
    <Container className={styles.container}>
      <PalletActions onDownload={onDownload} onSave={onSave} />
      <PalletsContainer>
        <PalletCard title="Current pallet - " {...{ colorName, ...props }}>
          <PalletBoxes colorName={colorName} />
        </PalletCard>

        {colorVariables.map(({ colorName, ...rest }) => (
          <PalletCard title="Pallet" onDelete={onDelete} colorName={colorName} {...rest}>
            <PalletBoxes colorName={colorName} />
          </PalletCard>
        ))}
      </PalletsContainer>
    </Container>
  );
};
