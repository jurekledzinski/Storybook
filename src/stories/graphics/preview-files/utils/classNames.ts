import stylesCardFile from '../components/card-file-preview/CardFilePreview.module.css';
import stylesPreview from '../PreviewFiles.module.css';
import { generateClassNames } from '@src/stories/helpers';
import { PreviewFileProps } from '../types';

type Placement = Pick<PreviewFileProps, 'gridPlacement'>['gridPlacement'];

// export const getClassNamesPreviewFiles = (gridPlacement?: Placement) =>
//   classNames(
//     stylesPreview.grid,
//     generateClassNames(stylesPreview, { [`${gridPlacement}`]: true })
//   );

export const getClassNamesPreviewFiles = (gridPlacement?: Placement) =>
  generateClassNames(stylesPreview, { [`${gridPlacement}`]: true });

// export const getClassNamesCardFilePreview = (gridPlacement?: Placement) => ({
//   card: classNames(
//     stylesCardFile.card,
//     generateClassNames(
//       { ...stylesPreview, ...stylesCardFile },
//       { [`card-${gridPlacement}`]: true }
//     )
//   ),
//   title: stylesCardFile.title,
// });

export const getClassNamesCardFilePreview = (gridPlacement?: Placement) => ({
  card: generateClassNames(
    { ...stylesPreview, ...stylesCardFile },
    { [`card-${gridPlacement}`]: true }
  ),
  title: stylesCardFile.title,
});
