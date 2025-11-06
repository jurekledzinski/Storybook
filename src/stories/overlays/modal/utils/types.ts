import { Color } from '@src/stories/types';

type Params = { color?: Color; variant?: 'outlined' };

export type ModalHeaderClassNames = (params: Params) => {
  header: string;
  title: string;
};
