import { PalletBox } from '../pallet-box/PalletBox';
import { PalletBoxesProps } from './types';

export const PalletBoxes = ({ colorName }: PalletBoxesProps) => {
  const shades = Array.from({ length: 13 }, (_, i) => (i === 0 ? 50 : i * 100));

  return (
    <>
      {shades.map((shade, i) => (
        <PalletBox index={i} key={`${colorName}-${shade}-${i}`}>
          {`${colorName}-${shade}`}
        </PalletBox>
      ))}
    </>
  );
};
