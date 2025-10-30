import styles from '../file-preview-card/FilePreviewCard.module.css';
import { FilePreviewTitleProps } from './types';

export const FilePreviewTitle = ({ file }: FilePreviewTitleProps) => {
  return <p className={styles.title}>{file.name}</p>;
};
