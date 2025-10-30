import stylesPreviewCard from '../components/file-preview-card/FilePreviewCard.module.css';
import stylesPreviewList from '../FilePreviewList.module.css';
import { generateClassNames } from '@src/stories/helpers';
import { PreviewCardClassNames, PreviewListClassNames } from './types';

export const filePreviewListClassNames: PreviewListClassNames = (placement) => {
  return generateClassNames(stylesPreviewList, {
    grid: true,
    [`${placement}`]: Boolean(placement),
  });
};

export const filePreviewCardClassNames: PreviewCardClassNames = (placement) => {
  return generateClassNames(
    { ...stylesPreviewList, ...stylesPreviewCard },
    { card: true, [`card-${placement}`]: Boolean(placement) }
  );
};
