export type FileData = {
  fileId: string;
  name: string;
  url: string;
  isOriginal?: boolean;
};

type FilesData = File | FileData;
type PreviewCardPlacement = 'column' | 'grid' | 'row';

type RenderChild = (
  file: FilesData,
  index: number,
  placement: PreviewCardPlacement
) => React.ReactNode;

export type FilePreviewListProps = {
  images: FilesData[];
  render: RenderChild;
  children?: React.ReactNode;
  placement?: PreviewCardPlacement;
};
