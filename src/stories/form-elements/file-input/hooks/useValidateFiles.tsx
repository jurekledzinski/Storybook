import { FileMimeType } from '@src/stories/types';
import { formatFileSize } from '@src/stories/helpers';
import { UseValidateFilesProps } from './types';

export const useValidateFiles = ({
  allowTypes,
  maxAmount,
  maxSize,
  onError,
}: UseValidateFilesProps) => {
  const checkFileType = (files: File[]) => {
    files.forEach((file) => {
      if (!allowTypes.includes(file.type as FileMimeType)) {
        onError('type', file.type, file.name);
      }
    });
  };

  const checkMaxSize = (files: File[]) => {
    if (!maxSize || maxSize.length < 2) return;

    files.forEach((file) => {
      const formattedSize = formatFileSize(file.size, maxSize[1]);
      if (parseFloat(formattedSize) > maxSize[0]) {
        onError('size', formattedSize, file.name);
      }
    });
  };

  const checkMaxAmountFiles = (files: File[]) => {
    if (!maxAmount) return;
    if (files.length > maxAmount) onError('amount', `${files.length}`);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    checkFileType([...e.target.files]);
    checkMaxSize([...e.target.files]);
    checkMaxAmountFiles([...e.target.files]);
  };

  return onChangeInput;
};
