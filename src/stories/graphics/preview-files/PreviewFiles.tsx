import { CardFilePreview } from './components';
import { PreviewFileProps } from './types';
import { getClassNamesPreviewFiles } from './utils';

export const PreviewFiles = ({
  gridPlacement = 'grid',
  images,
  onRemove,
}: PreviewFileProps) => {
  const classes = getClassNamesPreviewFiles(gridPlacement);

  return (
    <div className={classes}>
      {images.map((file, index) => (
        <CardFilePreview
          key={file.name}
          file={file}
          gridPlacement={gridPlacement}
          index={index}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};
