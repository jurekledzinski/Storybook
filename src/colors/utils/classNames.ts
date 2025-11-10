import styles from '../components/pallet-box/PalletBox.module.css';
import { generateClassNames } from '@src/stories';

export const palletBoxClassNames = (index: number) => {
  const name = index === 0 ? 'color-50' : `color-${index}00`;

  return generateClassNames(styles, {
    box: true,
    [name]: true,
  });
};
