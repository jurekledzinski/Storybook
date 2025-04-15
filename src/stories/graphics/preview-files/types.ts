export type PreviewFileProps = {
  images: File[];
  gridPlacement?: 'column' | 'grid' | 'row';
  onRemove: (index: number) => void;
};
