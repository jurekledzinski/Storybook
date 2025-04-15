import { FileMimeType, MaxSize } from '@src/stories/types';
import { UseValidateFilesProps } from './types';

const formatFileSize = (size: number, unit: MaxSize[1]) => {
  if (unit === 'KB') return (size / 1024).toFixed(2);
  if (unit === 'MB') return (size / 1024 ** 2).toFixed(2);
  if (unit === 'GB') return (size / 1024 ** 3).toFixed(2);
  return size.toString();
};

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

// function returnFileSize(num: number) {
//   if (num < 1e3) {
//     return `${num} bytes`;
//   } else if (num >= 1e3 && num < 1e6) {
//     return `${(num / 1e3).toFixed(1)} KB`;
//   } else {
//     return `${(num / 1e6).toFixed(1)} MB`;
//   }
// }
