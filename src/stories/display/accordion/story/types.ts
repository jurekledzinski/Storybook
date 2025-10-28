import { Color } from '@src/stories/types';
import { exampleData } from './data';

export type UseAlertStoryProps = {
  exampleData: typeof exampleData;
};

export type ExampleData = {
  color: Color;
  content: string;
  date: string;
  id: string;
  title: string;
};
