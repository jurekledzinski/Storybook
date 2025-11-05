import { DrawerProps } from '../../types';

type Params = Omit<DrawerProps, 'children'>;

export type StoryClassNames = (params: Params) => {
  body: string;
  header: string;
  container: string;
  grid: string;
  box: string;
  image: string;
};
