import { UseSelectFilesProps } from './types';

export const useSelectFiles = ({
  accept,
  multiple = true,
  onSelectFiles,
}: UseSelectFilesProps) => {
  const onClick = () => {
    if (!accept || !multiple) return;

    const inputFile = document.createElement('input');
    inputFile.type = 'file';
    inputFile.accept = accept;
    inputFile.multiple = multiple;

    inputFile.onchange = (event) => {
      if (!event.target) return;
      const files = (event.target as HTMLInputElement).files;
      if (!files) return;
      if (onSelectFiles) onSelectFiles(files);
    };

    inputFile.click();
  };

  return onClick;
};
