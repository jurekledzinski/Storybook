import styles from './CardFilePreview.module.css';
import { CardFilePreviewProps } from './types';
import { getClassNamesCardFilePreview } from '../../utils';
import { Image } from '@src/stories/graphics/image';
import { useEffect } from 'react';

export const CardFilePreview = ({
  file,
  index,
  onRemove,
  gridPlacement,
}: CardFilePreviewProps) => {
  const classes = getClassNamesCardFilePreview(gridPlacement);
  //   console.log('gridPlacement', gridPlacement);

  useEffect(() => {
    return () => URL.revokeObjectURL(URL.createObjectURL(file));
  }, [file]);

  return (
    <div className={classes.card}>
      <Image src={URL.createObjectURL(file)} alt="image" />
      <p className={classes.title}>{file.name}</p>
      <button className={styles.button} onClick={() => onRemove(index)}>
        x
      </button>
    </div>
  );
};
