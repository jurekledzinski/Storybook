import { Color } from '@src/stories/types';

type Params = { color?: Color; variant?: 'contained' | 'outlined' };

export type ModalHeaderClassNames = (params: Params) => {
  header: string;
  title: string;
};
