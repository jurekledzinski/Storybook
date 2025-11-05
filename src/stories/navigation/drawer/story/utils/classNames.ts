import storyStyles from '../../Example.module.css';
import { generateClassNames } from '@src/stories/helpers';
import { StoryClassNames } from './types';

export const storyClassNames: StoryClassNames = (params) => {
  const { direction, open } = params;

  return {
    body: storyStyles.body,
    header: storyStyles.header,
    container: generateClassNames(storyStyles, {
      container: true,
      open: Boolean(open),
      horizontal: direction === 'top' || direction === 'bottom',
      vertical: direction === 'left' || direction === 'right',
    }),
    grid: storyStyles.grid,
    box: storyStyles.box,
    image: storyStyles.image,
  };
};
